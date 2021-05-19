export default function Search() {
  return (
    <form class="search">
      <input
        type="text"
        placeholder="Please enter city"
        autocomplete="off"
        id="search-bar"
      />
      <input type="submit" value="🔍" id="search-button" />
      <input type="submit" value="📍 Your Location" id="location-button" />
      <div class="form-check form-switch">
        <label class="form-check-label" for="flexSwitchCheckDefault">
          <a href="/" id="cel">
            °C
          </a>
          <a href="/" id="fahr">
            | °F
          </a>
        </label>
      </div>
    </form>
  );
}
