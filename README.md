# DEalog Landingpage

## Development

In order to build the styles run
`npx tailwindcss build app.css -o css/styles.css`.

> The resulting CSS will have a whopping size of about 4.3MB. Do not commit the
> resulting `css/styles.css`. Check the next section of how to build it properly
> for production.

## Deployment

To deploy the landing page please ensure to have the styles in the purged
version.

To build the purged version run
`NODE_ENV=production npx tailwindcss build app.css -o css/styles.css`.

> The resulting `style.css` should have a size of roughly 22KB.
