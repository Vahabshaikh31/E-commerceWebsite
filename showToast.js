export function showToast(operation, id) {
    const toast = document.createElement("div");
    toast.classList.add("toast");
  
    // Set the text content of the toast based on the operation
    if (operation === "add") {
      toast.textContent = `${id} has been added.`;
    } else {
      toast.textContent = `${id} has been deleted.`;
    }
  
    document.body.appendChild(toast);
  
    // Automatically remove the toast after a few seconds
    setTimeout(() => {
      toast.remove();
    }, 2000);
  }
  