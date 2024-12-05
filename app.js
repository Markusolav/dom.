const halloDiv = document.querySelector("#hallo")
const btnClick = document.querySelector("#btnClick")
const inpName = document.querySelector ("#inpName")

btnClick.onclick = function() {
    halloDiv.innerHTML = `hei ${inpName.value}, håper du får en fin dag`
    halloDiv.style.color = "red"
    halloDiv.style.position = "absolute"
    halloDiv.style.bottom = "10"
    btnClick.style.display = "none"
}

