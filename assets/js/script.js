(function(){
document.getElementById('year')?.appendChild(document.createTextNode(new Date().getFullYear()));
document.getElementById('year2')?.appendChild(document.createTextNode(new Date().getFullYear()));
document.getElementById('year3')?.appendChild(document.createTextNode(new Date().getFullYear()));


const qs = new URLSearchParams(window.location.search);
const type = qs.get('type');
if(type){
const sel = document.getElementById('productType');
if(sel){ sel.value = type; updatePrice(); }
}


const priceMatrix = {
followers: { '100':4.99, '500':19.99, '1000':34.99, '200':9.99 },
likes: { '50':3.99, '200':12.99, '500':24.99, '100':6.99 }
};


function parseQtySelect(){
const q = document.getElementById('quantity');
return q ? q.value : null;
}


window.updatePrice = function(){
const product = document.getElementById('productType')?.value || 'followers';
const qty = parseQtySelect() || '100';
const p = (priceMatrix[product] && priceMatrix[product][qty]) ? priceMatrix[product][qty] : 0;
const el = document.getElementById('price');
if(el) el.textContent = '€' + p.toFixed(2);
}


const productSelect = document.getElementById('productType');
const qtySelect = document.getElementById('quantity');
if(productSelect) productSelect.addEventListener('change', updatePrice);
if(qtySelect) qtySelect.addEventListener('change', updatePrice);
updatePrice();
})();
