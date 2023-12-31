

function saveAB(speaker1, speaker2, index) {
    const table1 = document.querySelector(`#ab #a`)
    let raw_data = document.createElement('td')
    raw_data.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs_shuffle/ab/${index}/${speaker1}.wav" type="audio/mpeg">`
    table1.appendChild(raw_data)
    
    const table2 = document.querySelector(`#ab #b`)
    let raw_data2 = document.createElement('td')
    raw_data2.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs_shuffle/ab/${index}/${speaker2}.wav" type="audio/mpeg">`
    table2.appendChild(raw_data2)
    
    const table0 = document.querySelector(`#ab #text`)
    let raw_data0 = document.createElement('td')
    fetch(`./wavs_shuffle/ab/${index}/script.txt`)
    .then( response => response.text() )
    .then( text => raw_data0.innerText = text )
    table0.appendChild(raw_data0)

    const table6 = document.querySelector(`#ab #index`)
    let raw_data6 = document.createElement('td')
    raw_data6.innerText = decodeURIComponent(`${index}`)
    table6.appendChild(raw_data6)

}

function saveABX(speaker, index) {
    const table1 = document.querySelector(`#abx #a`)
    let raw_data = document.createElement('td')
    raw_data.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs_shuffle/abx/${index}/${speaker}.wav" type="audio/mpeg">`
    table1.appendChild(raw_data)
    
    const table0 = document.querySelector(`#abx #text`)
    let raw_data0 = document.createElement('td')
    fetch(`./wavs_shuffle/abx/${index}/script.txt`)
    .then( response => response.text() )
    .then( text => raw_data0.innerText = text )
    table0.appendChild(raw_data0)

    const table6 = document.querySelector(`#abx #index`)
    let raw_data6 = document.createElement('td')
    raw_data6.innerText = decodeURIComponent(`${index-5}`)
    table6.appendChild(raw_data6)

}


const speakerArray_ab = [
    "TTS_98qWWArcL3Y-facetts", "TTS_DPPq8w5ILrA-facetts", "TTS_b3kr5FZhUng-facetts", "TTS_Fvm877eQSqE-facetts", "TTS_MHoaMi5hKkE-facetts",  
    "TTS_a3QzK5pWpI4-facetts", "TTS_ni6gO5jDLJE-facetts", "TTS_JQSJsW2pdqY-facetts", "TTS_hgB5ziAudzU-facetts", "TTS_sf4uMnkYFG8-facetts"
]
const speakerArray_abx = [
    "TTS_ddjYExDFC48-facetts", "TTS_Edav0XMe31s-facetts", "TTS_yEnVShUZXks-facetts", "TTS_rcfm5Zo9O2U-facetts", "TTS_GWPzmoQ7rlo-facetts"
]


for (var i = 0; i < 5; i++) {
    let speaker1 = speakerArray_ab[i]
    let speaker2 = speakerArray_ab[i+5]
    saveAB(speaker1, speaker2, i+1)
}

for (var i = 0; i < 5; i++) {
    let speaker = speakerArray_abx[i]
    saveABX(speaker, i+6)
}
