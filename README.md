# int3306_2
## add w3 w4 w5 w6
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="author" content="Nguyễn Quang Thành 21020791" />
    <link rel="stylesheet" type="text/css" href="style.css" />
    <title>W7.Lab.CAY</title>
  </head>

  <body>
    <ul class="tree">
      <li class="has-children">
        <img
          src="images/minus.gif"
          onclick="javascript:Toggle(this);"
        /><a href=""><img src="images/folder.gif" /> Root</a>
        <ul>
          <li class="no-child">
            <a href=""><img src="images/folder.gif" /> Folder 1</a>
          </li>
          <li class="has-children">
            <img
              src="images/minus.gif"
              onclick="javascript:Toggle(this);"
            /><a href=""><img src="images/folder.gif" /> Folder 2</a>
            <ul>
              <li class="no-child">
                <a href=""><img src="images/folder.gif" /> Folder 2-1</a>
              </li>
              <li class="has-children">
                <img
                  src="images/minus.gif"
                  onclick="javascript:Toggle(this);"
                /><a href=""><img src="images/folder.gif" /> Folder 2-2</a>
                <ul>
                  <li class="no-child">
                    <a href=""><img src="images/folder.gif" /> Folder 2-2-1</a>
                  </li>
                  <li class="no-child">
                    <a href=""><img src="images/folder.gif" /> Folder 2-2-2</a>
                  </li>
                </ul>
              </li>
              <li class="no-child">
                <a href=""><img src="images/folder.gif" /> Folder 2-3</a>
              </li>
            </ul>
          </li>
          <li class="no-child">
            <a href=""><img src="images/folder.gif" /> Folder 3</a>
          </li>
          <li class="has-children">
            <img
              src="images/minus.gif"
              onclick="javascript:Toggle(this);"
            /><a href=""><img src="images/folder.gif" /> Folder 4</a>
            <ul>
              <li class="no-child">
                <a href=""><img src="images/folder.gif" /> Folder 4-1</a>
              </li>
              <li class="no-child">
                <a href=""><img src="images/folder.gif" /> Folder 4-2</a>
              </li>
              <li class="no-child">
                <a href=""><img src="images/folder.gif" /> Folder 4-3</a>
              </li>
            </ul>
          </li>
          <li class="no-child">
            <a href=""><img src="images/folder.gif" /> Folder 5</a>
          </li>
        </ul>
      </li>
    </ul>
    <script type="text/javascript" src="script.js"></script>
  </body>
</html>
