function toasterdanger(txt) {
  Toastify({
    text: txt + " ",
    duration: 1500,
    newWindow: true,
    close: true,
    gravity: "top", 
    position: "center", 
    stopOnFocus: false, 
    style: {
      background: "rgb(210, 31, 60)",
      color: "azure",
      fontSize: "1.2rem",
    },
  }).showToast();
}

function toastersuccess(txt) {
  Toastify({
    text: txt + " ",
    duration: 1500,
    newWindow: true,
    close: true,
    gravity: "top", 
    position: "center", 
    stopOnFocus: false,
    style: {
      background: "rgb(59, 122, 87)",
      color: "azure",

      fontSize: "1.2rem",
    },
  }).showToast();
}
