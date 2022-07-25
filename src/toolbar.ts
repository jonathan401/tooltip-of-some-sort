const avatar = document.querySelector('.avatar') as HTMLDivElement;
const box = document.querySelector('.box') as HTMLDivElement;
const box2 = document.querySelector('.box2') as HTMLDivElement;

// toolbar class
class Toolbar {
  container: HTMLElement;
  width: number;
  height: number;
  color?: string;
  position?: 'right-bottom' | 'left-bottom' | 'center';

  constructor (
      container: HTMLElement, 
      width: number, 
      height: number, 
      color?: string, 
      position?: 'right-bottom' | 'left-bottom' | 'center',
    ) {
    this.container = container;
    this.width = width;
    this.height = height;
    this.color = color;
    this.position = position;
  }

  setPosition = (toolbar: HTMLDivElement) => {
    switch(this.position) {
      case 'right-bottom': 
        toolbar.style.transformOrigin = 'left top';
        toolbar.style.left = `${(this.container.offsetWidth / 2)}`;
        break;

      case 'left-bottom':
        toolbar.style.transformOrigin = 'right top';
        toolbar.style.right = `${(this.container.offsetWidth / 2)}`;
        break;

      case 'center':
        toolbar.style.transformOrigin = 'top center';
        toolbar.style.right = `${(-1 * toolbar.offsetWidth / 2) + (this.container.offsetWidth / 2)}`;
        break;

      default:
        toolbar.style.transformOrigin = 'top right';
        toolbar.style.right = `${(this.container.offsetWidth / 2)}`;    
        break;
      };
  };

  init = () => {
    const toolbar = document.createElement('div');
    // add structure and style to toolbar
    toolbar.style.background = this.color ? `${this.color}`: '#888';
    toolbar.style.width = `${this.width}px`;
    toolbar.style.height = `${this.height}px`;
    toolbar.classList.add('toolbar');    
    
    // append the toolbar to the container
    this.container.appendChild(toolbar);
    this.setPosition(toolbar);
    
    this.container.addEventListener('click', () => {
      toolbar.classList.toggle('open');
    });
  };
};

// testing the class
const avatarToolBar = new Toolbar(avatar, 90, 40, '#888', 'left-bottom');
const boxToolBar = new Toolbar(box, 90, 40, '#666', 'center');
const box2ToolBar = new Toolbar(box2, 90, 40, '#444', 'right-bottom');
avatarToolBar.init();
boxToolBar.init();
box2ToolBar.init();