const treeData = [
    {
        label: "Root",
        children: [
            {
                label: "Folder 1",
            },
            {
                label: "Folder 2",
                children: [
                    {
                        label: "Folder 2-1",
                    },
                    {
                        label: "Folder 2-2",
                        children: [
                            {
                                label: "Folder 2-2-1",
                            },
                            {
                                label: "Folder 2-2-2",
                            },
                        ],
                    },
                    {
                        label: "Folder 2-3",
                    },
                ],
            },
            {
                label: "Folder 3",
            },
            {
                label: "Folder 4",
                children: [
                    {
                        label: "Folder 4-1",
                    },
                    {
                        label: "Folder 4-2",
                    },
                    {
                        label: "Folder 4-3",
                    },
                    {
                        label: "Folder 4-4",
                    },
                ],
            },
            {
                label: "Folder 5",
            },
        ],
    },
];

const treeContainer = document.querySelector(".tree > li");

function createTree(data, parent) {
    const ul = document.createElement("ul");
    data.forEach(function (item) {
        const li = document.createElement("li");
        li.className = item.children ? "has-children" : "no-child";

        if (item.children) {
            const toggle = document.createElement("img");
            toggle.src = "images/minus.gif";
            toggle.onclick = function () {
                Toggle(this);
            };
            li.appendChild(toggle);
        }
        const link = document.createElement("a");
        link.href = "";
        const folderImg = document.createElement("img");
        folderImg.src = "images/folder.gif";
        link.appendChild(folderImg);
        link.innerHTML += " " + item.label;

        li.appendChild(link);
        ul.appendChild(li);
        if (item.children) {
            createTree(item.children, li);
        }
        if (parent) {
            parent.appendChild(ul);
        } else {
            treeContainer.appendChild(ul);
        }
    });
}

createTree(treeData, null);

function Toggle(myself) {
    const ul = myself.parentNode.getElementsByTagName("ul")[0];
    if (ul.style.display === "none" || ul.style.display === "") {
        ul.style.display = "block";
        myself.src = "images/minus.gif";
    } else {
        ul.style.display = "none";
        myself.src = "images/plus.gif";
    }
}
