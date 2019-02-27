export default {
    basic: `
<ow-hero hero="mccree"></ow-hero>
<ow-hero hero="hanzo"></ow-hero>
<ow-hero hero="genji"></ow-hero>`,
    url: `
<ow-hero url="https://d1u1mce87gyfbn.cloudfront.net/hero/torbjorn/icon-portrait.png"></ow-hero>
<ow-hero url="https://d1u1mce87gyfbn.cloudfront.net/hero/widowmaker/icon-portrait.png"></ow-hero>
<ow-hero url="https://d1u1mce87gyfbn.cloudfront.net/hero/reinhardt/icon-portrait.png"></ow-hero>`,
    size: `
<ow-hero hero="pharah" size="small"></ow-hero>
<ow-hero hero="reaper" size="middle"></ow-hero>
<ow-hero hero="doomfist" size="large"></ow-hero>`,
    active: `
<ow-hero hero="dva" :is-active="false"></ow-hero>
<ow-hero hero="dva" :is-active="true"></ow-hero>`
}