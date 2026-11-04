const tbody = document.getElementById("tb");
const fileNames = ["plik.pdf", "plik.psd", "zdjecie.jpg"]
const fileIcons = ["file-pdf.png", "file-psd.webp", "file-jpg.png"]
const hours = ["11:30", "12:00", "15:27"]
const count = fileNames.length;

let htmlStack = "";
for (let i = 0; i<count; i++) {
    htmlStack += `
                            <tr class="rows">
                            <th scope="row">
                                <div class="cntti">
                                    <img src="./assets/${fileIcons[i]}" alt="pdf" class="small">
                                    <span>${fileNames[i]}</span>
                                </div>
                            </th>
                            <td>Otwarty przez ciebie • ${hours[i]}</td>
                            <td>
                                <div class="cntti">
                                    <img src="./assets/user.png" alt="user" class="small">
                                    <span>Admin Techni Schools</span>
                                </div>
                            </td>
                            <td>
                                <div class="cntti">
                                    <img src="./assets/shared.svg" alt="" class="small">
                                    <span>Udostępnione mnie</span>
                                    <div class="table-hidden-btns-div">
                                        <img src="./assets/share.svg" alt="share" class="table-hidden-btn">
                                        <img src="./assets/download.svg" alt="download" class="table-hidden-btn">
                                        <img src="./assets/rename.svg" alt="rename" class="table-hidden-btn">
                                        <img src="./assets/star2.svg" alt="star" class="table-hidden-btn">
                                    </div>
                                    <img src="./assets/3dots.svg" alt="options" class="small table-opts">
                                </div>
                            </td>
                        </tr>
    `;
}

tbody.innerHTML = htmlStack;