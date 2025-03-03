// List of box titles (Only title is given)
import { data } from "./data.js";

const boxData = data.tasks[0].assets;

// const boxData = [
//   "Login Form",
//   "Registration Form",
//   "Technical Project Management",
//   "Feedback Form",
// ];

const formContainer = document.getElementById("formContainer");
const journeyBoardContainer = document.getElementById(
  "journey-board-container"
);
const rightArrow = document.getElementById("right-arrow");


rightArrow.addEventListener("click", () => {
  if (journeyBoardContainer.style.transform === "translateX(-250px)") {
    rightArrow.style.transform = "rotate(180deg)";
    journeyBoardContainer.style.transform = "translateX(-50px)";
  } else {
    rightArrow.style.transform = "rotate(0deg)";
    journeyBoardContainer.style.transform = "translateX(-250px)";
  }
});

// Function to create a reusable box and insert the correct form
function createBox(assetData) {
  console.log(assetData.asset_title);
  const box = document.createElement("div");
  box.classList.add("box");

  // Create form based on title
  let formHTML = "";

  if (assetData.asset_title === "Technical Project Management") {
    formHTML = `
             <div class="asset-container">
        <div class="asset-header">
          <h3>${assetData.asset_title}</h3>
          <span class="asset-header-icon">
            <i class="fa-solid fa-circle-info"></i>
          </span>
        </div>
            <div class='description-content'>
         <p class='description'> <span >Description</span> : ${assetData.asset_description}</p>
        </div>

       <iframe width="100%" height="315" 
    src="https://www.youtube.com/embed/TiMRwri1xJ8" 
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>

      </div>
        `;
  } else if (assetData.asset_title === "Threadbuild") {
    formHTML = `
                <div class="asset-container">
        <div class="asset-header">
          <h3>${assetData.asset_title}</h3>
          <span class="asset-header-icon">
            <i class="fa-solid fa-circle-info"></i>
          </span>
        </div>
    <div class='description-content'>
         <p class='description'> <span >Description</span> : ${assetData.asset_description}</p>
        </div>
  <div class="Threadbuild-box-container">
      <div class="collaps-bar" id="collaps-bar">
        <span id="up-icon" class="up-icon"
          ><i class="fa-solid fa-angle-up"></i
        ></span>

        <h3>Thread A</h3>
      </div>

      <div class="form-container">
        <form action="" class="form">
          <div>
            <div class="sub-thread-container">
              <div class="subthread">
                <div class="innerinbox">
                  <div class="iner-subthread-heading">
                    <p>Sub thread 1</p>
                  </div>

                  <textarea
                    name=""
                    id=""
                    class="textareainner"
                    placeholder="Enter Text here"
                  ></textarea>
                </div>

                <div class="iner-menue-items">
                  <i class="fa-solid fa-lightbulb"></i>
                  <i class="fa-solid fa-message"></i>
                  <i class="fa-solid fa-clipboard-question"></i>
                  <i class="fa-brands fa-canadian-maple-leaf"></i>
                </div>
              </div>

              <div class="subthread">
                <div class="innerinbox">
                  <div class="iner-subthread-heading">
                    <p>Sub thread 1</p>
                  </div>

                  <textarea
                    name=""
                    id=""
                    class="textareainner"
                    placeholder="Enter Text here"
                  ></textarea>
                </div>

                <div class="iner-select-container">
                  <select name="" id="" class="iner-select">
                    <option value="" class="inner-select-options">
                      select category
                    </option>
                    <option value="" class="inner-select-options">
                      select 1
                    </option>
                    <option value="" class="inner-select-options">
                      select 2
                    </option>
                    <option value="" class="inner-select-options">
                      select 3
                    </option>
                    <option value="" class="inner-select-options">
                      select 4
                    </option>
                  </select>
                  <select name="" id="" class="iner-select">
                    <option value="" class="inner-select-options">
                      select category
                    </option>
                    <option value="" class="inner-select-options">
                      select 1
                    </option>
                    <option value="" class="inner-select-options">
                      select 2
                    </option>
                    <option value="" class="inner-select-options">
                      select 3
                    </option>
                    <option value="" class="inner-select-options">
                      select 4
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <button type="button" class="sub-thread-button">
                <span><i class="fa-solid fa-plus"></i></span>
                <p>Sub-thread</p>
              </button>
            </div>
          </div>

          <div class="">
            <div class="innerinbox">
              <div class="iner-subthread-heading">
                <p>Sub thread 1</p>
              </div>

              <textarea
                name=""
                id=""
                class="textareainner"
                placeholder="Enter Text here"
              ></textarea>
            </div>

            <div class="iner-select-container">
              <div><p class="Thread-Creadet">Thread Creadet</p></div>
              <select name="" id="" class="iner-select">
                <option value="" class="inner-select-options">
                  select category
                </option>
                <option value="" class="inner-select-options">select 1</option>
                <option value="" class="inner-select-options">select 2</option>
                <option value="" class="inner-select-options">select 3</option>
                <option value="" class="inner-select-options">select 4</option>
              </select>
            </div>
          </div>
          <div class="newthreadbtn-container">
            <button type="button" class="sub-thread-button">
              <span><i class="fa-solid fa-plus"></i></span>
              <p>New Thread</p>
            </button>
          </div>
        </form>
      </div>
    </div>
      </div>
        `;
  } else if (assetData.asset_title === "Structure you pointers") {
    formHTML = `


         <div class="asset-container">
         
        <div class="asset-header" >
          <h3>${assetData.asset_title}</h3>
          <span class="asset-header-icon">
            <i class="fa-solid fa-circle-info"></i>
          </span>
        </div>
         <div class='description-content'>
         <p class='description'> <span >Description</span> : ${assetData.asset_description}</p>
        </div>
             <div class="editor-container">
        <!-- Menu Bar -->
        <div class="menu-bar">
          <button>File</button>
          <button>Edit</button>
          <button>View</button>
          <button>Insert</button>
          <button>Format</button>
          <button>Tools</button>
          <button>Table</button>
          <button>Help</button>
        </div>

        <!-- Toolbar -->
        <div class="toolbar">
          <div class="toolbar-group">
            <button id="undo"><i class="icon-left"></i></button>
            <button id="redo"><i class="icon-right"></i></button>
          </div>

          <button id="fullscreen"><i class="icon-fullscreen"></i></button>
          <button id="image"><i class="icon-image"></i></button>

          <div class="toolbar-select">
            <select id="format-block">
              <option value="p">Paragraph</option>
              <option value="h1">Heading 1</option>
              <option value="h2">Heading 2</option>
              <option value="h3">Heading 3</option>
            </select>
          </div>

          <button id="bold"><i class="icon-bold">B</i></button>
          <button id="italic"><i class="icon-italic">I</i></button>

          <div class="toolbar-select">
            <button id="link"><i class="icon-link"></i></button>
          </div>

          <button id="more"><i class="icon-more">•••</i></button>
        </div>

        <!-- Editor Content -->
        <div id="editor-content"></div>

        <!-- Status Bar -->
        <div class="status-bar">
          <div class="status-help">Press Alt+0 for help</div>
          <div class="status-words"><span id="word-count">11</span> words</div>
        </div>
      </div>
       </div>
        `;
  } else if (assetData.asset_title === "4SA Method") {
    formHTML = `
              <div class="asset-container">
        <div class="asset-header">
          <h3>${assetData.asset_title}</h3>
          <span class="asset-header-icon">
            <i class="fa-solid fa-circle-info"></i>
          </span>
        </div>
        <div class='description-content'>
         <p class='description'> <span >Description</span> : ${assetData.asset_description}</p>
        </div>
       
      </div>
        `;
  } else {
    formHTML = "<p>No form available</p>";
  }

  box.innerHTML += formHTML;
  formContainer.appendChild(box);
}

// Generate boxes dynamically
boxData.forEach(createBox);

const upIcon = document.getElementById("up-icon");
const collapsBar = document.getElementById("collaps-bar");
const formContainerThreadBuild = document.querySelector(".form-container");

collapsBar.addEventListener("click", () => {
  if (formContainerThreadBuild.style.height === "0px") {
    upIcon.style.transform = "rotate(180deg)";
    formContainerThreadBuild.style.height = "400px";
  } else {
    formContainerThreadBuild.style.height = "0px";
    upIcon.style.transform = "rotate(0deg)";
  }
});

//REACH TEXT EDITOR
