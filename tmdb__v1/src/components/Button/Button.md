
```html
<button>
	
</button>
```


Style
```scss
.button {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  text-align: center;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  text-decoration: none !important;
  outline: none;
  -webkit-appearance: none;
  border: 1px solid transparent;
  cursor: pointer;
  user-select: none;
  background-image: linear-gradient(to right, rgba(30, 213, 169, 1) 0%, rgba(1, 180, 228, 1) 100%);
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 16px;
  text-transform: uppercase;
  color: #fff;
  padding: 8px 32px;

  transition: all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:focus,
  &:hover {
    border-color: rgba(30, 213, 169, 1);
    background-color: transparent;
    background-image: none;
    color: rgba(1, 180, 228, 1);
  }

  &.outline {
    border-color: rgba(30, 213, 169, 1);
    background-color: transparent;
    background-image: none;
    color: rgba(1, 180, 228, 1);

    &:focus,
    &:hover {
      background-image: linear-gradient(to right, rgba(30, 213, 169, 1) 0%, rgba(1, 180, 228, 1) 100%);
      color: #fff;
    }
  }
}
```