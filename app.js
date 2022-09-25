// let btn = document.getElementById("btn");
      let ul2 = document.getElementById("ul2");
      let ul3 = document.getElementById("ul3");

      let ul = document.getElementById("ul");

      function myFunction() {
        let x = document.querySelectorAll(".brand");
        x.forEach((item) => { if (item.style.display === "block") {
          item.style.display = "none";
        } else {
          item.style.display = "block";
        }})
      }

      ul.addEventListener("click", myFunction);

      function myFunction2() {
        let x = document.querySelectorAll(".shop");
        x.forEach((item) => { if (item.style.display === "block") {
          item.style.display = "none";
        } else {
          item.style.display = "block";
        }})
      }

      function myFunction3() {
        let x = document.querySelectorAll(".help");
        x.forEach((item) => { if (item.style.display === "block") {
          item.style.display = "none";
        } else {
          item.style.display = "block";
        }})
      }


      ul2.addEventListener("click", myFunction2);
      ul3.addEventListener("click", myFunction3);