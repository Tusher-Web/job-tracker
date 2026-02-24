let interviewList = [];
let rejectedList = [];
let currentStatus = "all";


const total = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");

const allJobButton = document.getElementById("all-job-button");
const interviewFilterButton = document.getElementById("interview-filter-btn");
const rejectionFilterButton = document.getElementById("rejection-filter-btn");

const filteredSection = document.getElementById("filtered-section");
const allCardSection = document.getElementById("jobContainer");



function calculateCount() {
  total.innerText = allCardSection.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}

calculateCount();



function toggleStyle(id) {
  document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("tab-active"));
  document.getElementById(id).classList.add("tab-active");
  currentStatus = id;

  if (id === "all-job-button") {
    allCardSection.classList.remove("hidden");
    filteredSection.classList.add("hidden");
  }

  if (id === "interview-filter-btn") {
    allCardSection.classList.add("hidden");
    filteredSection.classList.remove("hidden");
    renderInterview();
  }

  if (id === "rejection-filter-btn") {
    allCardSection.classList.add("hidden");
    filteredSection.classList.remove("hidden");
    renderRejected();
  }
}



allCardSection.addEventListener("click", handleAction);
filteredSection.addEventListener("click", handleAction);

function handleAction(event) {
  const card = event.target.closest(".card");
  if (!card) return;

  const companyName = card.querySelector(".company-name").innerText;
  const jobDesignation = card.querySelector(".job-designation").innerText;
  const jobSummary = card.querySelector(".job-summary").innerText;
  const jobDetails = card.querySelector(".job-details").innerText;

  if (event.target.classList.contains("interview-button")) {

    card.querySelector(".job-status").innerText =
      "Interview";

    const job = {
      companyName,
      jobDesignation,
      jobSummary,
      jobDetails,
      jobStatus: "Interview"
    };

    if (!interviewList.find(j => j.companyName === companyName)) {
      interviewList.push(job);
    }

    rejectedList =
      rejectedList.filter(j => j.companyName !== companyName);

    refreshCurrentTab();
  }

  

  else if (event.target.classList.contains("rejection-button")) {

    card.querySelector(".job-status").innerText = "Rejected";

    const job = {
      companyName,
      jobDesignation,
      jobSummary,
      jobDetails,
      jobStatus: "Rejected"
    };

    if (!rejectedList.find(j => j.companyName === companyName)) {
      rejectedList.push(job);
    }

    interviewList =
      interviewList.filter(j => j.companyName !== companyName);

    refreshCurrentTab();
  }


  if (event.target.closest(".fa-trash-can")) {
    interviewList = interviewList.filter(j => j.companyName !== companyName);
    rejectedList = rejectedList.filter(j => j.companyName !== companyName);
    card.remove();
    refreshCurrentTab();
  }
}



function refreshCurrentTab() {
  calculateCount();

  if (currentStatus === "interview-filter-btn")
    renderInterview();

  if (currentStatus === "rejection-filter-btn")
    renderRejected();
}


// Message while no cards available in interview or rejection section
function emptyMessage(text) {
  filteredSection.innerHTML = `
    <div class="text-center p-10 text-3xl text-gray-500">
        <i class="fa-solid fa-file-excel mb-3 text-sky-700 text-8xl"></i>
        <br>
        ${text}
    </div>
  `;
}



function renderInterview() {
  filteredSection.innerHTML = "";

  if (interviewList.length === 0) {
    emptyMessage("No Interview Jobs Available");
    return;
  }

  interviewList.forEach(job => {
    filteredSection.appendChild(createCard(job));
  });
}



function renderRejected() {
  filteredSection.innerHTML = "";
  if (rejectedList.length === 0) {
    emptyMessage("No Rejected Jobs Available");
    return;
  }

  rejectedList.forEach(job => {
    filteredSection.appendChild(createCard(job));
  });
}


// Card Create Section
function createCard(job) {
  const div = document.createElement("div");
  div.className = "card bg-base-100 shadow mb-3";
  div.innerHTML = `
    <div class="card-body">

      <div class="flex justify-between">
        <h2 class="company-name font-bold text-lg">
          ${job.companyName}
        </h2>

        <button class="btn btn-sm btn-circle">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>

      <p class="job-designation font-medium">
        ${job.jobDesignation}
      </p>

      <p class="job-summary text-sm text-gray-500">
        ${job.jobSummary}
      </p>

      <p class="job-details">
        ${job.jobDetails}
      </p>

      <p class="job-status my-2">
        ${job.jobStatus}
      </p>

      <div class="space-x-2">
        <button class="interview-button btn btn-success btn-sm">
          Interview
        </button>

        <button class="rejection-button btn btn-error btn-sm">
          Rejected
        </button>
      </div>

    </div>
  `;

  return div;
}