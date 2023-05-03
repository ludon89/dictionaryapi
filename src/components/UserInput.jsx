export function UserInput () {
  return (
    <>
      <div className="userinput-cont">
        <form>
          <input type="text" placeholder="Tapez un mot..." name="search" className="search-bar" />
          <button>
            Rechercher
          </button>
        </form>
      </div>
    </>
  );
}