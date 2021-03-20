var item = document.getElementById("items");

const exercise_link = (name, route, description, image) => {
    let cardContent = `<div class="col-12 col-md-6 col-lg-4 col-xl-3"><div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;"><div class="card-body"><h5 class="card-title">${name}</h5><p class="card-text">${description}</p><a href="${route}" class="btn btn-primary">Ver Practica</a></div></div></div>`;
    return cardContent;
}

for (var i = 0; i < routes.length; i++) {
    var {
        name,
        route,
        description,
        image
    } = routes[i];
    item.innerHTML += exercise_link(name, route, description, image);
}