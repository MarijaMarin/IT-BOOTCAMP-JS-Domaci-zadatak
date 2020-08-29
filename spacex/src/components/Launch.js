// Функција (Компонента) Launch враћа хтмл елемент
export const Launch = (launch) => {
    // launch.launch_year
    // launch.rocket.rocket_name
    // launch.links.mission_patch  // slika
    const launchContainer = document.createElement('div')
    launchContainer.className = 'launch'

    // launchContainer.innerHTML = `
    // <div class="inner-div-0">
    //     <img src="${launch.links.mission_patch}" alt="">
    // </div>
    // <div class="inner-div-1">
    //     <span>${launch.rocket.rocket_name}</span>
    // </div>
    // <div class="inner-div-2">
    //     <span>${launch.launch_year}</span>
    // </div>
    // `
    const div0 = document.createElement('div')
    div0.className = 'inner-div-0'
        const img = document.createElement('img')
        img.src = launch.links.mission_patch
    div0.append(img)

    const div1 = document.createElement('div')
    div1.className = 'inner-div-1'
        const span1 = document.createElement('span')
        span1.textContent = launch.rocket.rocket_name
    div1.appendChild(span1)

    const div2 = document.createElement('div')
    div2.className = 'inner-div-2'
        const span2 = document.createElement('span')
        span2.textContent = launch.launch_year
    div2.appendChild(span2)

    launchContainer.append(div0,div1,div2)
    return launchContainer
}