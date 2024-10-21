
```html
<div class="modal-wrapper">
    <div class="modal">
        <div class="modal-box">
            <button type="button" class="modal-close">
                <svg viewBox="0 0 16 16" width="16" height="16">
                    <path
                            d="m9.3 8 6.1-6.1c.4-.4.4-.9 0-1.3s-.9-.4-1.3 0L8 6.7 1.9.6C1.6.3 1 .3.6.6c-.3.4-.3 1 0 1.3L6.7 8 .6 14.1c-.4.4-.3.9 0 1.3l.1.1c.4.3.9.2 1.2-.1L8 9.3l6.1 6.1c.4.4.9.4 1.3 0s.4-.9 0-1.3L9.3 8z"/>
                </svg>
            </button>
            <div class="modal-header">
                <h4>Modal</h4>
            </div>
            <div class="modal-content">
                КІНО => {title}
            </div>
            <div class="modal-footer">
                <div class="button-wrapper">
                    <button class="btn" type="button" >OK</button>
                    <button class="btn" type="button" >Cancel</button>
                </div>
            </div>
        </div>
    </div>
</div>
```


Style
```scss
.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 560px;
  width: 100%;
  padding: 40px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 4px;

  .modal-header {
    margin-bottom: 24px;
    font-size: 36px;
  }


  .modal-content {
  }

  .modal-footer {
    margin-top: 24px;
  }

  .button-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.modal-close {
  position: absolute;
  right: 16px;
  top: 16px;
  display: inline-flex;
  vertical-align: middle;
  text-align: center;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  text-decoration: none !important;
  outline: none;
  -webkit-appearance: none;
  border: none;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
}
```