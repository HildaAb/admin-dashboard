const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

/*fundera*/

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("i:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("i:nth-child(2)").classList.toggle("active");
});

/*fundera*/

orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `
     <td>${order.productName}</td> 
       <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
         <td>${order.shipping}</td> 
         <td class="primary">Details</td>
    `;

  tr.innerHTML = trContent;
  console.log(trContent);

  document.querySelector("table tbody").appendChild(tr);
});
