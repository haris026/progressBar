// napraviti progressbar (googlajte ako ne znate sta je)
// funkcija ne prima nikakav argument ako necete
// vraca objekat sa div-om od progressbar-a (da ga mozete ubaciti u neki kontejner) i sljedece metode:
// - increment(val) - uvecaje progressbar za valutu
// - decrement(val) - isto sto i increment samo u rikverc
// - set(val) - postavlja valutu direktno (ne uvecaje za xy, nego direkt postavi progress na npr 50%)

// BONUS: animacije
// ne koristite input type="progress" vec napravite progressbar od 2 diva

const fn = () => {
  let trenutniProgress = 0;
  let rootElementInstance = null;

  const set = (value) => {
    trenutniProgress = value;
    if (trenutniProgress > 100 || trenutniProgress < 0) return;
    const punaDuzinaProgresa =
      rootElementInstance.querySelector('.progress-bar').offsetWidth;

    const progressBar = rootElementInstance.querySelector('.progress');  
    const progressLabel = rootElementInstance.querySelector('.progress-label');

      // ovdje tražimo progress i progress-label unutar tog specificnog progress bara
      // kad bi pisao document.querySelector, odabralo bi sve progress barove na ekranu
      // 88. linija..


    progressLabel.innerHTML = `${trenutniProgress}%`;
    progressBar.style.width = `${punaDuzinaProgresa * (trenutniProgress / 100)}px`;
  };
  const increment = (value) => {
    trenutniProgress += value;
    set(trenutniProgress);
  };
  const decrement = (value) => {
    trenutniProgress -= value;
    set(trenutniProgress);
  };

  const create = () => {
    // za sve
    const root = document.createElement('div');
    root.setAttribute('id', 'omotac');

    
    const progressWrapper = document.createElement('div');
    progressWrapper.classList.add('progress-bar');

    
    const progress = document.createElement('div');
    progress.classList.add('progress');

    
    const progressLabel = document.createElement('div');
    progressLabel.classList.add('progress-label');

    progress.appendChild(progressLabel);
    progressWrapper.appendChild(progress);

   
    const controls = document.createElement('div');
    controls.classList.add('kontrole');
    controls.setAttribute('id', 'kontrole');
      // plus minus
    const incrementValue = document.createElement('div');
    incrementValue.textContent = '+';
    const decrementValue = document.createElement('div');
    decrementValue.textContent = '-';
    const setValue = document.createElement('input');

    incrementValue.classList.add('btn');
    decrementValue.classList.add('btn');
    incrementValue.setAttribute('id', 'vise');
    decrementValue.setAttribute('id', 'manje');

    incrementValue.addEventListener('click', () => increment(10));
    decrementValue.addEventListener('click', () => decrement(10));
    setValue.addEventListener('input', (e) => set(e.target.value));

    controls.appendChild(incrementValue);
    controls.appendChild(decrementValue);
    controls.appendChild(setValue);

    // 
    root.appendChild(progressWrapper);
    root.appendChild(controls);
    rootElementInstance = root; // ovo je instanca od kreiranog elementa, spremamo je u varijablu zato što je van scope-a da možemo kasnije da koristimo u ostalim funkcijama
    // jer kad bi iso recimo progress.set(50) bez te instance, svim progress barovima na ekranu bi se promijenio progress na 50
    // a ovako će se samo toj instanci izmijeniti  
    // to je ono u fazonu reko si mi da moze se kreirati vise progressbarova, a u prethodnoj zadaći mi je bilo samo jedan
    // valjda se sjećaš...
    return root;
  };

  return { create, increment, decrement, set };
};

const progress = fn();
document.body.appendChild(progress.create());
progress.set(27);

const progress2 = fn();
document.body.appendChild(progress2.create());
progress2.set(45);
progress2.decrement(20);
