export default {
basic: `
<ow-blood :total="150"></ow-blood>
<ow-blood :total="200"></ow-blood>
<ow-blood :total="250"></ow-blood>
<ow-blood :total="500"></ow-blood>
<ow-blood :total="600"></ow-blood>`,
width: `
<ow-blood :width="320" :total="200"></ow-blood>
<ow-blood :width="480" :total="600"></ow-blood>`,
residual: `
<ow-blood :residual="100" :total="200"></ow-blood>
<ow-blood :residual="200" :total="600"></ow-blood>`,
color: `
<ow-blood residualColor="#3B9CE1" goneColor="#909399" :total="150" :residual="50"></ow-blood>
<ow-blood residualColor="#DE4561" goneColor="#909399" :total="200" :residual="150"></ow-blood>`,
textColor: `
<ow-blood 
    totalTextColor="#3B9CE1" 
    residualTextColor="#909399" 
    residualColor="#3B9CE1" 
    goneColor="#909399" 
    :total="150" 
    :residual="50">
</ow-blood>
<ow-blood 
    totalTextColor="#DE4561" 
    residualTextColor="#909399" 
    residualColor="#DE4561" 
    goneColor="#909399" 
    :total="200" 
    :residual="150">
</ow-blood>`
}