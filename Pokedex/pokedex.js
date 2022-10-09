const allPokemon = [];
async function pokemon() {
  for (let i = 1; i< 151; i++){
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/'+i);
  const resPokemon = await res.json ();
  allPokemon.push(resPokemon);
}} 
const mapPokemon = (pokem) =>{
    const mappedPokemons = pokem.map((poke) => ({
      id: poke.id,
      name: poke.name,
      type: poke.types.map(type => type.type.name),
      height: poke.weight,
      weight: poke.weight,
      img: poke.sprites.other.home.front_default,
    }))
    return mappedPokemons
  }
  const imprimirPokemons = (pokem) => {
    const ol$$ = document.querySelector("ol");
    const div$$ = document.createElement('div');
    const img$$ = document.createElement('img');
    const h1$$ = document.createElement('h1');
    const h2$$ = document.createElement('h2');
    img$$.setAttribute("src", pokem.sprites.other.home.front_default); 
    h1$$.textContent = pokem.name;
    h2$$.textContent = "nº" + pokem.id;
    ol$$.appendChild(div$$);
    div$$.appendChild(img$$);
    div$$.appendChild(h1$$);
    div$$.appendChild(h2$$);
    document.body.appendChild(ol$$)
  }
  const searchPoke = (nombre,mapPokemon) => {
    const filterPoke = mapPokemon.filter( (pokemon) => pokemon.name.toLowerCase().includes(nombre.toLowerCase()));//, (pokemon) => pokemon.type.toLowerCase().includes(type.toLowerCase()));
    console.log(filterPoke);
    imprimirPokemons(filterPoke);
}
  const setListener = (mappedPokemons) => {
    let btn$$ = document.querySelector("button");
    let input$$ = document.querySelector("input");
    btn$$.addEventListener('click',() => searchPoke (input$$.value,allPokemon));
  }
  async function init () {
    const imprimirPokemon = await pokemon();
    const mappedPokemons = mapPokemon(allPokemon);
    console.log(mappedPokemons);
    for (const pokemon of allPokemon) {
    imprimirPokemons(pokemon);
  }}
setListener(allPokemon);
  init();