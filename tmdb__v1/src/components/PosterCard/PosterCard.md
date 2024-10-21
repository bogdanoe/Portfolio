
```html
<div class="card-poster">
    <img
            src={`${IMG_URL}${poster.poster_path}`}
            height={'376px'}
            alt={poster.name ? poster.name : poster.title}
    />
    <div class="poster-back">
        <h4 class="card-title">{name}</h4>
        <p class="card-subtitle">{poster.original_name}</p>
        <p class="card-desc">{poster.overview}</p>
        <div class="card-buttons">
            <button class="button" to={linkPath} >Show more</button>
            <button class="button" theme="outline">Favorite</button>
        </div>
    </div>
</div>
```


Props
```js
{poster, handelModal, handleCurrentPost}
const linkPath = poster.original_title ? `/cinema/${poster.id}` : `/tv/${poster.id}`
```


Style
```scss
.card-poster {
  position: relative;
  border: 1px solid transparent;

  img {
    position: relative;
    border-radius: 4px;
    height: 100%;
    width: 100%;
    //object-fit: contain;
    transition: transform 0.25s;
  }

  &:hover {
    border-color: #000;
    transform: rotateY(180deg);

    img {
      z-index: 10;
      opacity: 0.2;
    }

    .poster-back {
      opacity: 1;
      backface-visibility: visible;
    }
  }
  
  .poster-back {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    opacity: 0;
    padding: 16px;
    box-sizing: border-box;
    background-color: rgba(255,255,255, 0.8);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: rotateY(-180deg);
    transition: transform 0.8s;
  }
  
  .card-title {
    padding: 0;
    margin: 0 0 8px;
    font-size: 24px;
    line-height: 1;
  }
  
  .card-subtitle {
    padding: 0;
    margin: 0 0 32px;
    font-size: 20px;
  }
  
  .card-desc {
    max-height: 200px;
    overflow: hidden;
  }
  
  .card-buttons {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    justify-content: flex-end;
    margin-top: 32px;

    .button {
      width: 100%;

      + .button {
        margin-top: 16px;
      }
    }
  }
}
```