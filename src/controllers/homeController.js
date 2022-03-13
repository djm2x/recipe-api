
import express from 'express';

// @ts-check
// @return {Response}

/**
 * A simple string example.
 * @type {string} routeName
 */
const routeName = '/api/home';


/**
* @param {express.Express} app
*/
export function homeController(app) {

    // get
    app.route(`${routeName}/get`).get((req, res) => {
        res.send({ok: 'okey'});
        // res.send({ok: 'okey'});
    });


}
