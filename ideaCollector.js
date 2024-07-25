const body = document.body;
const newPostClass = document.getElementById('newPostClass')
const addNewClassInput = document.getElementById('addNewClassInput')
const addNewClassBtn = document.getElementById('addNewClassBtn')
const addNewTagInput = document.getElementById('addNewTagInput')
const addNewTagBtn = document.getElementById('addNewTagBtn')
const commonTags = document.getElementById('commonTags')
const newPostTextarea = document.getElementById('newPostTextarea')
const postContainer = document.getElementById('postContainer')
const addMainImg = document.getElementById('addMainImg')

const newPostTitle = document.getElementById('newPostTitle')
const postBtn = document.getElementById('postBtn')
const btnNewPost_mb = document.getElementById('btnNewPost_mb')
const formMb = document.getElementById('formMb')
const btnNewPostClose_mb = document.getElementById('btnNewPostClose_mb')

const postItemPopOut = document.getElementById('postItemPopOut')
const postItemPopOutContent = document.getElementById('postItemPopOutContent')
const btnPopOutClose = document.getElementById('btnPopOutClose')
const colorMode = document.getElementById('colorMode')


const defaultClasses = [
    '未定', '插畫', '配色', '網頁設計', '筆記'
];

const defaultTags = [
    '練習題目', '系列作', '工作', '教學', '資源', '觀念', '社群', '季節', '靈感', '手作', '商品客製', '草圖', 'LINE貼圖','JavaScript','CSS'
]

const userData = {
    classes: [...defaultClasses],
    tags: [...defaultTags]
}

const userDataClasses = userData.classes;
const userDataTags = userData.tags;

const userPosts = [
    {
        title: 'then 和 catch',
        time: '2024-01-03',
        cover: '/img/note_2.png',
        postClass: '筆記',
        content: '',
        tags: ['JavaScript'],
    },
    {
        title: '精簡寫法 -剪刀石頭布',
        time: '2024-01-02',
        cover: '/img/note_1.png',
        postClass: '未定',
        content: '',
        tags: ['練習題目'],
    },
    {
        title: 'React & TS',
        time: '2024-01-03',
        cover: '',
        postClass: '筆記',
        content: 'React 19：React 團隊正積極開發 React 19，這一版本將包含許多性能改進和新特性，包括改進的 Concurrent Rendering 和更高效的 State Management。<br><br>Next.js 和 Nuxt.js 更新：這些流行的框架持續更新，提供更強大的 SSR（Server-Side Rendering）功能和更好的開發體驗。例如，Next.js 13 引入了全新的 App Router 和更高效的數據抓取方法。<br><br>ESLint 和 Prettier 更新：這些工具不斷更新，提供更強的代碼檢查和格式化功能，以提高代碼質量和一致性。Deno 的興起：作為 Node.js 的替代品，Deno 提供了更安全和現代化的 JavaScript/TypeScript 運行時環境，支持模組加載、內建 TypeScript 支持等功能。總體來說，JavaScript 生態系統正在快速發展，新特性和技術的推出不斷提升開發效率和應用性能。開發者應持續關注這些更新，以保持技術的前瞻性和競爭力。',
        tags: ['JavaScript'],
    },
    {
        title: '練習題目',
        time: '2024-01-02',
        cover: '',
        postClass: '未定',
        content: '<a href="https://www.freecodecamp.org/">https://www.freecodecamp.org/</a>',
        tags: ['練習題目'],
    },
    {
        title: 'callback function & 一般function',
        time: '2024-01-02',
        cover: '',
        postClass: '筆記',
        content: '定義方式<br>一般函式：直接定義並在需要時調用。<br>回呼函式：作為參數傳遞給另一個函式，並在特定條件下由那個函式調用。<br><br>調用時間<br>一般函式：定義後可以立即調用或在程式碼中的任何位置調用。<br>回呼函式：只有在特定事件發生時才會被調用，比如事件完成或條件滿足時。<br><br>用法<br>一般函式：可以獨立存在，直接調用。<br>回呼函式：通常用於處理異步操作或事件驅動的程式碼，需要傳遞給另一個函式。<br><br>回呼函式與一般函式的主要區別在於它們的使用方式和調用時間。回呼函式被設計用來在某個特定事件或條件發生時執行，這使得它們在處理異步操作和事件驅動的程式碼時特別有用。',
        tags: ['工作','觀念','JavaScript'],
    },
    {
        title: '藍色貓貓&其他系列 -異色調整',
        time: '2024-01-02',
        cover: '/img/11.png',
        postClass: '插畫',
        content: '主:藍色; 跳:粉橘紅',
        tags: ['系列作', '靈感', '草圖', 'LINE貼圖'],
    },
    {
        title: '藍色貓貓的日常-02',
        time: '2024-01-02',
        cover: '/img/19.png',
        postClass: '插畫',
        content: '主:藍色; 跳:粉橘紅',
        tags: ['系列作', '靈感', '草圖', 'LINE貼圖'],
    },
    {
        title: '藍色貓貓的日常-01',
        time: '2024-01-01',
        cover: '/img/04.png',
        postClass: '插畫',
        content: '需再細分為無字版及有字版',
        tags: ['系列作', '靈感', '草圖', 'LINE貼圖'],
    },
    {
        title: '藍色貓貓的日常-[顏色設定]',
        time: '2024-01-02',
        cover: '/img/cat_set.jpg',
        postClass: '插畫',
        content: '主:藍色; 跳:粉橘紅',
        tags: ['系列作', '靈感', '草圖', 'LINE貼圖'],
    },
    {
        title: '藍色貓貓的日常-草',
        time: '2024-01-01',
        cover: '/img/test.jpg',
        postClass: '插畫',
        content: '需再細分為無字版及有字版',
        tags: ['系列作', '靈感', '草圖', 'LINE貼圖'],
    },
    {
        title: '配色參考3',
        time: '2024-01-02',
        cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqjVkrs0aruM3-624d3RAuMUc5iFOBm2qJgQ&s',
        postClass: '配色',
        content: 'TEST, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        tags: ['練習題目'],
    },
    {
        title: '配色參考2',
        time: '2024-01-02',
        cover: '/img/color_1.jpeg',
        postClass: '配色',
        content: 'TEST',
        tags: ['練習題目'],
    },
    {
        title: '配色參考',
        time: '2024-01-02',
        cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfpgfg0k4Hl79aab_3tvAKzmHbQoaWja5o0JCpaRRacORkvKPBM1Uag4G0hMnXtiMue2A&usqp=CAU',
        postClass: '配色',
        content: 'TEST',
        tags: ['練習題目'],
    },
    {
        title: '關於配色',
        time: '2024-01-02',
        cover: '',
        postClass: '配色',
        content: '補色\n 補色是色環上180度角、色環正對面的兩種完全互補的顏色，比如說紅色與綠色。這種搭配會產生強烈的對比，如果想要凸顯某物，這種組合方式非常不錯。而互補色在完全飽和的屬性下，會呈現一種生動活潑的效果。但是互補色不適合大範圍的使用，也較不推薦將互補色應用在文字上。\n </ br> 相似色 \n 相似色指的是色環上相鄰的三色，它們通常搭配起來都非常協調，創造出一種寧靜、舒適的設計感。相似色在大自然中隨處可見，這種配色手法和諧、令人身心愉悅。但小心，設計師在使用這種配色手法時，必須確保顏色間的對比度。通常設計師會選一種顏色為主，第二種顏色為輔，而第三種顏色則會與黑、白、灰搭配作為重點的使用。',
        tags: ['練習題目'],
    },

]



newPostClass.innerHTML = '';
commonTags.innerHTML = '';


// 隨機亂碼
function getRandomTxt(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomTxt = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomTxt += characters[randomIndex];
    }

    return randomTxt;
}


// post 加 ID
let addPostId = () => {
    for (post of userPosts) {
        // '未定', '插畫', '配色', '網頁設計', '筆記'
        // console.log(post);

        if (post.postClass == '未定') {
            let randomTxt = getRandomTxt(5);
            post.id = `undecided-${post.time}-${randomTxt}`
        }
        else if (post.postClass == '插畫') {
            let randomTxt = getRandomTxt(5);
            post.id = `illus-${post.time}-${randomTxt}`
        }
        else if (post.postClass == '配色') {
            let randomTxt = getRandomTxt(5);
            post.id = `color-${post.time}-${randomTxt}`
        }
        else if (post.postClass == '網頁設計') {
            let randomTxt = getRandomTxt(5);
            post.id = `webDesign-${post.time}-${randomTxt}`
        }
        else if (post.postClass == '筆記') {
            let randomTxt = getRandomTxt(5);
            post.id = `note-${post.time}-${randomTxt}`
        }
    }
}

addPostId()

// 初次渲染 初次渲染 初次渲染 ///////////////////////////////////

const colorModeBtn = document.querySelectorAll('.colormode');
let colorModeDefault = '';
let getColorModeDefault = () => {
    body.className = '';
    for (btn of colorModeBtn) {
        if (btn.classList.contains('default')) {
            colorModeDefault += btn.dataset.color;
        }
    }
    body.classList.add(`theme_${colorModeDefault}`);
}
getColorModeDefault();


// 色彩模式
colorMode.addEventListener('click', (e) => {
    if(e.target.nodeName !== 'BUTTON'){
        return
    }
    else if (['colormode', 'on'].every(cls => e.target.classList.contains(cls))) {
        return
    }
    else {
        for (const btn of colorModeBtn) {
            btn.classList.remove('default');
            btn.classList.remove('on');
        }
        e.target.classList.add('on');

        body.className = ''
        body.classList.add(`theme_${e.target.dataset.color}`);
    }
})



// 篩選文章分類
let classFilter = [];

let postFilter = () => {
    for (const userDataClass of userDataClasses) {
        let eachClassPost = userPosts.filter(post => post.postClass == userDataClass)
        classFilter.unshift(eachClassPost)
    }
    classFilter = classFilter.filter(arr => arr.length !== 0)
}

postFilter()
// console.log(classFilter);


// 將文章內容轉換為HTML格式
function formatContent(content) {
    return content
        .replace(/\n\n+/g, '</p><p>')  
        .replace(/\n/g, '<br>')        
        .trim();
}


// 渲染至HTML
postContainer.innerHTML = '';

let postRender = () => {
    let themeHTML = '';
    classFilter.forEach((eachTheme) => {
        let postHTML = '';

        eachTheme.forEach((eachPost) => {
            let hasCover = eachPost.cover ? true : false;

            postHTML += `
            <div class="post_item">
                <div class="post_title">${eachPost.title}</div>
                <div class="post_time">${eachPost.time}</div>
                <div class="post_cover ${hasCover ? '' : 'none_cover'}" ${hasCover ? `style = 'background-image:url("${eachPost.cover}")'` : ''} ></div>
                <button class="btn readmore_ver" type="button" data-post=${eachPost.id}></button>

            </div>
            `
        })
        themeHTML += `
        <div class="theme">
            <div class="theme_title">${eachTheme[0].postClass}</div> 
            <div class="full_height of_h">
                <div class="post_item_scrollauto_container">
                    ${postHTML}
                </div>
            </div>
        </div>
    `
        // console.log(eachTheme[i], eachTheme[i].postClass);
        // console.log(themeHTML);
        // postContainer.innerHTML=themeHTML;
    })
    postContainer.innerHTML = themeHTML;


    // add popout eventListener
    const postItems = document.querySelectorAll('.post_item');
    // console.log(postItems);
    for (const postItem of postItems) {
        postItem.addEventListener('click', (e) => {
            // console.log(e.target.dataset.post);
            for (const post of userPosts) {
                if (post.id == e.target.dataset.post) {
                    let hasCover = post.cover ? true : false;

                    let postTags = post.tags;
                    let tagsHTML = '';
                    for (const tag of postTags) {
                        tagsHTML += `<button class="btn selectable tags marb_10">${tag}</button>`
                    }
                    let contentHTML=formatContent(`${post.content}`)

                    postItemPopOutContent.innerHTML = `
                        <div class="post_title">${post.title}</div>
                        <div class="post_time">${post.time}</div>
                        <div class="post_cover ${hasCover ? '' : 'none_cover'}"><img src="${post.cover}" alt=""></div>
                        <div class="post_context">${contentHTML}</div>
                        <div id="" class="common_tags_overflow scrollbar_style mart_10" name="tags">
                            ${tagsHTML}
                        </div>
                    `
                }
            }


            postItemPopOut.classList.add('on');

        })
    }
}
postRender();

let postReRender = () => {
    classFilter = [];
    postFilter();
    postRender();
}


// 初次渲染: 新增貼文的tags
const firstRender = (userDataArr, renderBlock) => {

    for (const userClass of userDataArr) {

        if (renderBlock.getAttribute('name') == 'classes') {
            renderBlock.innerHTML += `
        <option value="${userClass}">${userClass}</option>
        `
        }
        if (renderBlock.getAttribute('name') == 'tags') {
            renderBlock.innerHTML += `
        <button class="btn selectable tags marb_10" type="button" value="${userClass}">${userClass}</button> `
            btnSelectable();
        }
    }
}

firstRender(userData.classes, newPostClass);
firstRender(userData.tags, commonTags);

// 初次渲染 初次渲染 初次渲染 END ///////////////////////////////////



// 新增tag
addNewTagBtn.addEventListener('click', () => {
    const userTagsArr = userData.tags;
    if (addNewTagInput.value == '') {
        alert("請輸入標籤")
    }
    userTagsArr.push(addNewTagInput.value);
    commonTags.innerHTML += `<button class="btn selectable tags marb_10" type="button" value="${addNewTagInput.value}">${addNewTagInput.value}</button> `
    btnSelectable()
    addNewTagInput.value = '';

})


// tag 可複選 + 樣式
function btnSelectable() {
    let btnSelectableList = document.querySelectorAll('.selectable')
    for (const btnSelectable of btnSelectableList) {
        btnSelectable.addEventListener('click', (e) => {
            btnSelectable.classList.toggle('selected');
            // console.log(e.target.value);
        })
    }
}



// 取得貼文內容 回傳
const getPostContent = () => {
    let newTitleContent = newPostTitle.value;
    let newPostClassContent = newPostClass.value;
    let newPostTextareaContent = newPostTextarea.value;
    let newMainImg = addMainImg.value;

    let newPostSelectedTags = document.querySelectorAll('.btn.selected');
    let newPostTagsArr = [];
    for (const SelectedTag of newPostSelectedTags) {
        newPostTagsArr.push(SelectedTag.value);
    }
    // console.log(newMainImg);

    const postTime = getPostTime();

    let newPostGetId = () => {
        if (newPostClassContent == '未定') {
            let randomTxt = getRandomTxt(5);
            return `undecided-${postTime}-${randomTxt}`
        }
        else if (newPostClassContent == '插畫') {
            let randomTxt = getRandomTxt(5);
            return `illus-${postTime}-${randomTxt}`
        }
        else if (newPostClassContent == '配色') {
            let randomTxt = getRandomTxt(5);
            return `color-${postTime}-${randomTxt}`
        }
        else if (newPostClassContent == '網頁設計') {
            let randomTxt = getRandomTxt(5);
            return `webDesign-${postTime}-${randomTxt}`
        }
        else if (newPostClassContent == '筆記') {
            let randomTxt = getRandomTxt(5);
            return `note-${postTime}-${randomTxt}`
        }
    }



    return {
        id: newPostGetId(),
        title: newTitleContent,
        time: postTime,
        cover: newMainImg,
        postClass: newPostClassContent,
        content: newPostTextareaContent,
        tags: newPostTagsArr,
    }

    // userPosts.unshift(obj)
}

const getPostTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    return `${year}-${month}-${date}`
}
// console.log('log第0次', userPosts);

postBtn.addEventListener('click', () => {

    getPostContent();
    // console.log('log第1次', userPosts);
    userPosts.unshift(getPostContent());
    postFilter();
    postReRender();
    formMb.classList.remove('on');


    console.log(getPostContent());

    // 清空欄位
    newPostTitle.value = '';
    newPostClass.value = '未定';
    newPostTextarea.value = '';
    addMainImg.value = '';

    let newPostSelectedTags = document.querySelectorAll('.btn.selected');
    for (const SelectedTag of newPostSelectedTags) {
        SelectedTag.classList.remove('selected')
    }

    //

})

btnNewPost_mb.addEventListener('click', () => {
    formMb.classList.toggle('on')
})


btnNewPostClose_mb.addEventListener('click', () => {
    formMb.classList.remove('on')
})

btnPopOutClose.addEventListener('click', () => {
    postItemPopOut.classList.remove('on')
})

