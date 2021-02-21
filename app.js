const vertical_line = document.querySelector('#vertical_line'),
      place_add_text = document.querySelector('#add_text'),
      str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.\n' +
          '        Officia corrupti delectus quam nesciunt possimus reprehenderit,\n' +
          '        blanditiis velit quidem voluptatem illum deserunt perferendis distinctio tempora.\n' +
          '        Minima tenetur facere provident aliquam vero. Facilis, nulla, voluptates nihil aut dolorem,\n' +
          '        fuga corporis harum quibusdam cupiditate velit reprehenderit! Ut itaque a natus aperiam voluptatem nulla,\n' +
          '        perferendis exercitationem dolorum, nisi molestias, enim reiciendis rerum saepe veniam?\n' +
          '        Recusandae aspernatur consequatur id in, sapiente laboriosam enim et laudantium porro unde maiores,\n' +
          '        ex eius hic quae? Corporis nemo voluptas quo itaque expedita ullam numquam at ea delectus,\n' +
          '        atque ipsam! Necessitatibus architecto iure itaque enim sunt repellendus distinctio laboriosam!\n' +
          '        Modi consequuntur qui nesciunt saepe, eaque quidem. At doloribus vero praesentium sed non esse\n' +
          '        consectetur fugit nisi laudantium. Consequuntur, rem ipsum. Quod amet vitae, quisquam ratione magnam dolorem!\n' +
          '        Nesciunt aperiam quam praesentium sapiente, labore facilis deleniti non. Ratione, autem nesciunt explicabo nihil\n' +
          '        non placeat dolorem praesentium recusandae aperiam consequuntur itaque. Consectetur. Iste quo quis porro suscipit\n' +
          '        facilis repellat? Harum consequatur sunt voluptatem obcaecati est pariatur porro, ducimus ea! Cumque pariatur nostrum facere,\n' +
          '        blanditiis ipsum optio consequatur et recusandae obcaecati ratione beatae!';

const flashing = setInterval(()=>{
     vertical_line.style.visibility === 'hidden' ? vertical_line.style.visibility = 'visible' : vertical_line.style.visibility = 'hidden';
}, 500)

function add_text(str, place) {
    let delay = 300,
        i = 1;

    str.forEach( e =>{
        let letter = e;
        setTimeout(()=>{ place.innerHTML += letter}, delay*i);
        i++;
    })
}
add_text([...str], place_add_text);