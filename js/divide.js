var kazki = document.getElementById("kazki"),
	padanni = document.getElementById("padanni"),
	legends = document.getElementById("legends");

function kazkishow()
{

	kazki.classList.remove("hide");
	padanni.classList.add("hide");
	legends.classList.add("hide");

}

function padannishow()
{

	padanni.classList.remove("hide");
	kazki.classList.add("hide");
	legends.classList.add("hide");

}

function legendsshow()
{

	legends.classList.remove("hide");
	kazki.classList.add("hide");
	padanni.classList.add("hide");

}