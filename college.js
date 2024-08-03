const collegeArr = [
    {
        college: "NCIT",
        "collegelink": "https://ncit.edu.np/",
        "collegeimg":"https://ncit.edu.np/storage/photo/cover/zFftaidnVWvw2kEaawbaQr3v9RGV2k7n7htCHaPQ.jpg",
        university:"Pokhara University",
        about:"Nepal College of Information Technology (NCIT) is a prominent private institution in Nepal specializing in technology and management education. Here's a brief overview of NCIT:",
        founded: 2001,
        location: "Lalitpur, Kathmandu Valley, Nepal",
        type: "Private"
    },
    {
        college: "KIST",
        "collegelink": "https://kist.edu.np/",
        "collegeimg":"https://media.edusanjal.com/gallery/KIST_college_Building-min.jpg",
        university:"Pokhara University",
        about:"KIST College (Kathmandu Institute of Science and Technology) is a well-regarded private institution in Nepal that focuses on providing quality education in various fields of science and technology. Here’s a brief overview:",
        founded: 1993,
        location: "Kathmandu, Nepal",
        type: "Private"
    },
    {
        college: "Thapathali Campus",
        "collegelink": "https://www.tcioe.edu.np/",
        "collegeimg":"https://www.ioenotes.edu.np/media/2015/10/kathford-engineering-college-ioe.jpg",
        university:"Tribhuvan University"
    },
    {
        college:"Pulchowk Campus",
        "collegelink": "https://pcampus.edu.np/",
        "collegeimg":"https://thumbs.dreamstime.com/b/beautiful-building-pulchowk-engineering-college-beautiful-building-pulchowk-engineering-college-167359910.jpg",
        university:"Tribhuvan University"
    },
    {
        college:"Kathmandu Engineering College",
        "collegelink": "https://www.kecktm.edu.np/",
        "collegeimg":"https://gunagroups.com/wp-content/uploads/2018/02/viber_image_2020-04-17_15-40-29.jpg",
        university:"Tribhuvan University"
    },
    {
        college: "Nepal Engineering College",
        "collegelink": "https://nec.edu.np/",
        "collegeimg":"https://www.gobhaktapur.com/wp-content/uploads/2022/12/nec-building.jpg",
        university:"Tribhuvan University"
    },
    {
        college:"Khwopa College of Engineering",
        "collegelink":"https://khwopa.edu.np/",
        "collegeimg":"https://kpti.edu.np/themes/kpti/assets/images/about/history.png",
        university:"Tribhuvan University"
    }
]
const collegeContainer = document.getElementById("colleges");
console.log(collegeContainer);

const displayAurthors = (collegeArr)=>{
    collegeArr.forEach(({college,collegelink,collegeimg,university,founded,location,about},index)=>{
            collegeContainer.innerHTML += `
            <div class="college" id="${index}" style="background-image:url(${collegeimg});"> 
            <a href="${collegelink}">
                <h2>${college}</h2>
                <p>University: <span id="${index}">${university}</span></p>
                <p class="founded">Founded: ${founded}</p>
                <p class="location">Location: ${location}</p>
                <p class="bio">${about}<?p>
            </div>
            </a>
            `;
        }
    );
}

document.addEventListener("DOMContentLoaded",displayAurthors(collegeArr));

const search = ()=>{
    const searchBox = document.getElementById("search").value.toUpperCase();
    const college = document.querySelectorAll(".college");
    const cname = document.getElementsByTagName("h2");
  
    for(let i=0; i < cname.length ;i++){
      let match = (college[i].getElementsByTagName("h2")[0]);
      if(match){
        let textValue = match.textContent || match.innerHTML;
        if(textValue.toUpperCase().indexOf(searchBox) > -1){
          college[i].style.display = "";
        }
        else{
          college[i].style.display = "none";
        }
      }
    }
}