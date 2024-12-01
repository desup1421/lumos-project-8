/* eslint-disable no-undef */
describe('Blog APP', () => {
  const data = {
    "method": "GET",
    "status": true,
    "results": {
      "title": "Balatro Berhasil Kantongi $4,4 Juta Saat Dirilis di Platform Mobile!",
      "author": "Teo Ariesda",
      "date": "November 27, 2024",
      "categories": [
        "Games",
        "Game News"
      ],
      "content": "<img src=\"https://thelazy.media/wp-content/uploads/2024/11/Untitled-12-696x392.jpg\" alt=\"Image\">\n<p>\n\n</p>\n<p>\nRabu (27/11) — Dilansir dari PocketGamer, berdasarkan data dari App Magic, diklaim bahwa Balatro telah mendapatkan kurang lebih $4,4 juta (sekitar Rp 70 miliar) sejak dirilis di platform mobile!\n</p>\n<p>Rabu (27/11) — Dilansir dari PocketGamer, berdasarkan data dari App Magic, diklaim bahwa Balatro telah mendapatkan kurang lebih $4,4 juta (sekitar Rp 70 miliar) sejak dirilis di platform mobile!</p>\n<p>\nSimak trailer selengkapnya di bawah!\n</p>\n<p>Simak trailer selengkapnya di bawah!</p>\n<p>\n\n</p>\n<p>Waktu yang diperlukan untuk mencapai jumlah tersebut hanyalah dua bulan saja sejak tanggal perilisannya di App Store dan Google Play. Sebenarnya ini bukan berita yang mengejutkan</p>"
    }
  }

  const datas = [
    {
      "title": "Balatro Berhasil Kantongi $4,4 Juta Saat Dirilis di Platform Mobile!",
      "thumb": "https://thelazy.media/wp-content/uploads/2024/11/Untitled-12-218x150.jpg",
      "author": "Teo Ariesda",
      "tag": "Game News",
      "time": "November 27, 2024",
      "desc": "Rabu (27/11) — Dilansir dari PocketGamer, berdasarkan data dari App Magic, diklaim bahwa Balatro telah mendapatkan kurang lebih $4,4 juta (sekitar Rp 70 miliar) sejak dirilis di platform mobile!\n\n\n\nSimak trailer selengkapnya...",
      "key": "2024/11/27/balatro-27112024"
    },
    {
      "title": "The Game Awards 2024 Akhirnya Umumkan Beberapa Nominasi Gim Terbaik di Tahun Ini!",
      "thumb": "https://thelazy.media/wp-content/uploads/2024/11/maxresdefault-218x150.jpg",
      "author": "Teo Ariesda",
      "tag": "Game News",
      "time": "November 19, 2024",
      "desc": "Selasa (19/11) — Setelah ditunggu sekian lama, akhirnya seluruh nominasi The Game Awards 2024 diumumkan oleh Geoff Keighley dini hari tadi!\n\nSimak pengumuman selengkapnya di sini!\n\n\n\n\n\nhttps://www.youtube.com/watch?v=9blwxyOXuRI\n\n\nIni Dia Berbagai Nominasi di The Game...",
      "key": "2024/11/19/the-game-awards-2024-19112024"
    },
    {
      "title": "RATATAN, Gim Action Rhythm Roguelite Siap Rilis Tahun 2025!",
      "thumb": "https://thelazy.media/wp-content/uploads/2024/11/Image01-1-218x150.jpg",
      "author": "Teo Ariesda",
      "tag": "Game News",
      "time": "November 16, 2024",
      "desc": "Sabtu (16/11)— Game Source Entertainment (GSE) umumkan bahwa mereka akan terbitkan gim yang berjudul RATATAN akan dirilis pada tahun 2025!\n\nSimak informasi selengkapnya di bawah!\n\nhttps://www.youtube.com/watch?v=HR9r-LXLGnI&pp=ygUHcmF0YXRhbg%3D%3D\nRATATA Sebuah Gim Rhythmic Roguelike Action Terbaru dari...",
      "key": "2024/11/16/ratatan-16112024"
    },
    {
      "title": "Monster Hunter Outlanders Kejutkan Para Fans Lewat Trailer Terbarunya!",
      "thumb": "https://thelazy.media/wp-content/uploads/2024/11/Monster-Hunter-Outlanders_2024_11-12-24_017-218x150.jpg",
      "author": "Teo Ariesda",
      "tag": "Game News",
      "time": "November 13, 2024",
      "desc": "Rabu (13/11) — Tiba-tiba Monster Hunter kembali mengejutkan dunia pergemingan dengan menghadirkan trailer terbaru untuk gim terbarunya berjudul Monster Hunter Outlanders!\n\nSimak trailer terbaru dan informasi selengkapnya di bawah!\n\n\n\n\nhttps://www.youtube.com/watch?v=uxQK-QDxGUs\nTiMi Studio Group dan...",
      "key": "2024/11/13/monster-hunter-outlanders-13112024"
    }
  ]
  // This is for visit localhost before any test
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  });

  // This is for check display title (home page)
  it('should display the blog page', () => {
    cy.get('h1').should('contain', 'Blog')
  });

  // This is for check display recent and all post (home page)
  it('should get data from API', () => {
    cy.intercept('GET', '**/api/games?page=1', {
      statusCode: 200,
      body: datas
    }).as('getRecentPost')

    cy.intercept('GET', '**/api/games/news?page=1', {
      statusCode: 200,
      body: datas
    }).as('getPost')

    //visit web
    cy.visit('http://localhost:5173/')

    //wait for api
    cy.wait('@getPost')
    cy.wait('@getRecentPost')

    //check data card is visible
    cy.get("div[data-cy='post-card']").should("be.visible")
  });

  // This is for check redirect to detail page when card is clicked
  it('should redirect to detail page', () => {
    // Get data from API (Recent post, all post, post detail)
    // Incept should be declare before visit web
    cy.intercept('GET', '**/api/games?page=1', {
      statusCode: 200,
      body: datas
    }).as('getRecentPost')

    cy.intercept('GET', '**/api/games/news?page=1', {
      statusCode: 200,
      body: datas
    }).as('getPost')

    cy.intercept('GET', '**/api/detail/2024/11/27/balatro-27112024', {
      statusCode: 200,
      body: data
    }).as('getPostDetail')

    //visit web
    cy.visit('http://localhost:5173/')
    //wait for api
    cy.wait('@getRecentPost')
    cy.wait('@getPost')

    //click card
    cy.get("div[data-cy='post-card']").first().click()

    //Visit new link (link detail)
    cy.visit('http://localhost:5173/blog/2024/11/27/balatro-27112024')

    //wait for api (post detail)
    cy.wait('@getPostDetail')
    //check data card is visible
    cy.get("h1").should("contain", "Balatro Berhasil Kantongi $4,4 Juta Saat Dirilis di Platform Mobile!")
  });
})