// Basic site JS for interactions + querystring prefill
(function(){
// set footer years
document.getElementById('year')?.appendChild(document.createTextNode(new Date().getFullYear()));
document.getElementById('year2')?.appendChild(document.createTextNode(new Date().getFullYear()));
document.getElementById('year3')?.appendChild(document.createTextNode(new Date().getFullYear()));


// prefill order page from query ?type=followers
const qs = new URLSearchParams(window.location.search);
const type = qs.get('type');
if(type){
const sel = document.getElementById('productType');
if(sel){ sel.value = type; updatePrice(); }
}


// price matrix
const priceMatrix = {
