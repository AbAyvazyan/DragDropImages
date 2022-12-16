function UploadFileHandler({elementID, addID, type = []}) {
    this.elementID = elementID
    this.addID = addID
    this.type = type;
    this.files = [];

    this.imageArray = []

    const takeImageBlock = document.getElementById(elementID)
    const addImages = document.getElementById(addID)
    const inputedImages = document.getElementById('fileInput')

    function listenerBinder() {
        takeImageBlock.addEventListener('drop', onDragOut)
        takeImageBlock.addEventListener('dragover', onDragOver)
        takeImageBlock.addEventListener('dragleave', onDragLeave)
        takeImageBlock.addEventListener('dragenter', onDragEnter)
    }

    listenerBinder()


    function onDragEnter(e) {
        e.preventDefault()
    }

    function onDragOver(e) {
        e.preventDefault()
    }

    function onDragLeave(e) {
        e.preventDefault()
    }

    function addImagesHandler(files) {
        for (let i = 0; i < files.length; i++) {
            this.files.push(files[i])
            let reader = new FileReader();
            reader.onload = () => {
                let cardDiv = document.createElement('div')
                let cardImage = document.createElement('img')
                let cardInfo = document.createElement('div')
                let cardInfoType = document.createElement('span')
                let cardInfoSize = document.createElement('span')
                let cardDelete = document.createElement('span')


                cardDiv.className = 'image_card'


                cardImage.src = reader.result;
                cardImage.alt = 'Image'

                cardInfo.className = 'image_info'
                console.log(files[i])
                cardInfoType.innerText = files[i].type.split('/')[1]

                cardInfoSize.innerText = `(${files[i].size})`

                cardDelete.className = 'delete_image_card'
                cardDelete.innerHTML = '&#10008;'

                cardDelete.addEventListener('click', function (e) {
                    e.currentTarget.parentNode.remove();
                })


                cardDiv.appendChild(cardImage)

                cardInfo.append(cardInfoType, cardInfoSize)

                cardDiv.append(cardInfo, cardDelete)


                addImages.appendChild(cardDiv)
            }
            reader.readAsDataURL(files[i])
        }
        console.log(this.files)
    }

    function onDragOut(e) {
        e.preventDefault()


        let files = e.dataTransfer.files;

        addImagesHandler(files)
    }

    function fn (e) {
        let files = e.target.files

        addImagesHandler.bind(this)([...files])
        e.target.value = ''
    }
    inputedImages.addEventListener('change', fn.bind(this))
}

const uploadFile = new UploadFileHandler({
    elementID: 'take_images',
    addID: 'show_part',
    type: ['png']
})