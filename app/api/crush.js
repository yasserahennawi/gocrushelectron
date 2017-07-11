import 'whatwg-fetch'

export function getCrushesOnMe() {
  const api = `http://localhost:4567/api/users/${localStorage.getItem('appUserID')}/crushes-on-me-count`;
  return fetch(api, {
    headers: {
      'Authorization': localStorage.getItem('Authorization')
    },
  })
}

export function getMyCrushes() {
  const api = `http://localhost:4567/api/users/${localStorage.getItem('appUserID')}/crushes`;
  return fetch(api, {
    headers: {
      'Authorization': localStorage.getItem('Authorization')
    },
  })
}

export function postCrush(crushUrl) {
  const api = `http://localhost:4567/api/users/${localStorage.getItem('appUserID')}/crushes`;
  return fetch(api, {
    method: 'POST',
    body: crushUrl.payload,
    headers: {
      'Authorization': localStorage.getItem('Authorization')
    },
  })
}
