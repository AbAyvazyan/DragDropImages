

function UploadFileHandler({elementID,addID,type=[]}){
    this.elementID = elementID
    this.addID = addID
    this.type = type

    this.imageArray = []

    const takeImageBlock = document.getElementById(elementID)
    const addImages = document.getElementById(addID)

    function listenerBinder(){
        takeImageBlock.addEventListener('drop',onDragOut)
        takeImageBlock.addEventListener('dragover',onDragOver)
        takeImageBlock.addEventListener('dragleave',onDragLeave)
        takeImageBlock.addEventListener('dragenter',onDragEnter)
    }


    function onDragEnter(e){
        e.preventDefault()
    }

    function onDragOver(e){
        e.preventDefault()
    }

    function onDragLeave(e){
        e.preventDefault()
    }

    function onDragOut(e){
        e.preventDefault()

        // let imageArray = [...e.dataTransfer.files]
        // const reader = new FileReader()
        // imageArray.map(image=>{


        //     document.onload = function (){
        //         let cardDiv = document.createElement('div')
        //         let cardImage = document.createElement('img')
        //         let cardInfo = document.createElement('div')
        //         let cardInfoType = document.createElement('span')
        //         let cardInfoSize = document.createElement('span')
        //         let cardDelete = document.createElement('span')
        //
        //
        //         cardDiv.className = 'image_card'
        //
        //
        //         cardImage.src = reader.result;
        //         cardImage.alt = 'Image'
        //
        //         cardInfo.className = 'image_info'
        //
        //         cardInfoType.innerText = image.type
        //
        //         cardInfoSize.innerText = image.size
        //
        //         cardDelete.className = 'delete_image_card'
        //         cardDelete.innerText = '&#10008;'
        //
        //
        //         cardDiv.appendChild(cardImage)
        //
        //         cardInfo.append(cardInfoType,cardInfoSize)
        //
        //         cardDiv.append(cardInfo,cardDelete)
        //
        //
        //         addImages.appendChild(cardDiv)
        //
        //     }
        //
        //     reader.readAsDataURL(image)
        //
        //
        // })

        let files = e.dataTransfer.files;

        let file;
        for (let i=0; i<files.length ; i++){
            let reader = new FileReader();
            file = files [i];
            reader.onload = (file) => {
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

                cardInfoType.innerText = file.type

                cardInfoSize.innerText = file.size

                cardDelete.className = 'delete_image_card'
                cardDelete.innerText = '&#10008;'


                cardDiv.appendChild(cardImage)

                cardInfo.append(cardInfoType,cardInfoSize)

                cardDiv.append(cardInfo,cardDelete)


                addImages.appendChild(cardDiv)
            }
            reader.readAsDataURL(file)
        }


    }

    listenerBinder()

}

const uploadFile = new UploadFileHandler({
    elementID:'take_images',
    addID:'show_part'
})