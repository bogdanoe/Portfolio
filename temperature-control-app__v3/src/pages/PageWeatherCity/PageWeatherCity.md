
```html
<PageWrapper pageName={`Weather ${id}`}>
    <div class="weather__title">{city}</div>
    <Weather city={city} days={5}/>
</PageWrapper>
```


```scss
.weather__title {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  font-family: Roboto, sans-serif;
  font-size: 180px;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  margin-bottom: 100px;
}
```