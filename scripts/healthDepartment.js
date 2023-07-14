const apiUrlDepartment = "";
const searchDepartmentBox = document.querySelector(".search_department input");
const searchDepartmentBtn = document.querySelector(".search_department button");
        
    async function checkDepartment(healthDepartmentState){
        const response = await fetch(apiUrlDepartment + healthDepartmentState)
        var data = await response.json();
        console.log(data);

            document.querySelector(".department").innerHTML
            
        }

    searchDepartmentBtn.addEventListener("click", () => {
    checkDepartment(searchDepartmentBox.value);
    })

  