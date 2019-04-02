var date = new Date();
var arr = document.getElementsByClassName("tdate");
switch (date.getMonth()) {
    case 0:
        for (var x = 0; x < arr.length; x++) {
            arr[x].innerHTML = date.getDate() + " ,Студзень";
        };
        break;
    case 1:
        for (var x = 0; x < arr.length; x++) {
            arr[x].innerHTML = date.getDate() + " ,Люты";
        };
        break;
    case 2:
        for (var x = 0; x < arr.length; x++) {
            arr[x].innerHTML = date.getDate() + " ,Сакавік";
        };
        break;
    case 3:
        for (var x = 0; x < arr.length; x++) {
            arr[x].innerHTML = date.getDate() + " ,Красавік";
        };
        break;
    case 4:
        for (var x = 0; x < arr.length; x++) {
            arr[x].innerHTML = date.getDate() + " ,Май";
        };
        break;
    case 5:
        for (var x = 0; x < arr.length; x++) {
            arr[x].innerHTML = date.getDate() + " ,Чэрвень";
        };
        break;
    case 6:
        for (var x = 0; x < arr.length; x++) {
            arr[x].innerHTML = date.getDate() + " ,Ліпень";
        };
        break;
    case 7:
        for (var x = 0; x < arr.length; x++) {
            arr[x].innerHTML = date.getDate() + " ,Жнівень";
        };
        break;
    case 8:
        for (var x = 0; x < arr.length; x++) {
            arr[x].innerHTML = date.getDate() + " ,Верасень";
        };
        break;
    case 9:
        for (var x = 0; x < arr.length; x++) {
            arr[x].innerHTML = date.getDate() + " ,Кастрычнік";
        };
        break;
    case 10:
        for (var x = 0; x < arr.length; x++) {
            arr[x].innerHTML = date.getDate() + " ,Лістапад";
        };
        break;
    case 11:
        for (var x = 0; x < arr.length; x++) {
            arr[x].innerHTML = date.getDate() + " ,Снежань";
        };
        break;
}