import express from 'express';
import cors from 'cors';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import "isomorphic-fetch";

import App from '@common/App';
import { Html } from '@lib';
import * as constants from '@constants';

const app = express();

app.use(cors());

app.use(express.static('dist'));

app.get('/', (req, res, next) => {
    const { APP_TITLE, BUNDLE_PATH, DEFAULT_LOCATION } = constants;
    const sheet = new ServerStyleSheet();

    fetch(`https://jobs.github.com/positions.json?description=javascript&location=${DEFAULT_LOCATION}`)
        .then(response => response.json())
        .then(jsonData => {
            const markup = renderToString(sheet.collectStyles(<App data={jsonData}/>));
            const styles = sheet.getStyleTags();
            res.send(Html(APP_TITLE, BUNDLE_PATH, jsonData, styles, markup));
        });
})

app.get('/about', (req, res, next) => {
  const { APP_TITLE, BUNDLE_PATH, DEFAULT_LOCATION } = constants;
  const sheet = new ServerStyleSheet();
  const jsonData = {};

  const markup = renderToString(sheet.collectStyles(<BrowserRouter><App data={jsonData}/></BrowserRouter>));
  const styles = sheet.getStyleTags();
  res.send(Html(APP_TITLE, BUNDLE_PATH, jsonData, styles, markup));
})

app.listen(3000, () => {
    console.log(`Server is listening on port: ${constants.PORT}`)
});
