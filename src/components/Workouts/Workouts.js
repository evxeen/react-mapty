import React from "react";

export function Workouts() {
  return (
      <ul className="workouts">
        <form className="form hidden">
          <div className="form__row">
            <label className="form__label">Type</label>
            <select name="type" className="form__input form__input--type">
              <option value="running">Running</option>
              <option value="cycling">Cycling</option>
            </select>
          </div>
          <div className="form__row">
            <label className="form__label">Distance</label>
            <input
                name="distance"
                className="form__input form__input--distance"
                placeholder="km"
                autoComplete="off"
            />
          </div>
          <div className="form__row">
            <label className="form__label">Duration</label>
            <input
                name="duration"
                className="form__input form__input--duration"
                placeholder="min"
                autoComplete="off"
            />
          </div>
          <div className="form__row">
            <label className="form__label">Cadence</label>
            <input
                name="cadence"
                className="form__input form__input--cadence"
                placeholder="step/min"
                autoComplete="off"
            />
          </div>
          <div className="form__row form__row--hidden">
            <label className="form__label">Elev Gain</label>
            <input
                name="elevation"
                className="form__input form__input--elevation"
                placeholder="meters"
                autoComplete="off"
            />
          </div>
          <button className="form__btn">OK</button>
        </form>

        {/*     <li className="workout workout--running" data-id="1234567890">*/}
        {/*    <h2 className="workout__title">Running on April 14</h2>*/}
        {/*    <div className="workout__details">*/}
        {/*        <span className="workout__icon">?????????????</span>*/}
        {/*        <span className="workout__value">5.2</span>*/}
        {/*        <span className="workout__unit">km</span>*/}
        {/*    </div>*/}
        {/*    <div className="workout__details">*/}
        {/*        <span className="workout__icon">???</span>*/}
        {/*        <span className="workout__value">24</span>*/}
        {/*        <span className="workout__unit">min</span>*/}
        {/*    </div>*/}
        {/*    <div className="workout__details">*/}
        {/*        <span className="workout__icon">??????</span>*/}
        {/*        <span className="workout__value">4.6</span>*/}
        {/*        <span className="workout__unit">min/km</span>*/}
        {/*    </div>*/}
        {/*    <div className="workout__details">*/}
        {/*        <span className="workout__icon">????????</span>*/}
        {/*        <span className="workout__value">178</span>*/}
        {/*        <span className="workout__unit">spm</span>*/}
        {/*    </div>*/}
        {/*</li>*/}
        {/*    <li className="workout workout--cycling" data-id="1234567891">*/}
        {/*        <h2 className="workout__title">Cycling on April 5</h2>*/}
        {/*        <div className="workout__details">*/}
        {/*            <span className="workout__icon">?????????????</span>*/}
        {/*            <span className="workout__value">27</span>*/}
        {/*            <span className="workout__unit">km</span>*/}
        {/*        </div>*/}
        {/*        <div className="workout__details">*/}
        {/*            <span className="workout__icon">???</span>*/}
        {/*            <span className="workout__value">95</span>*/}
        {/*            <span className="workout__unit">min</span>*/}
        {/*        </div>*/}
        {/*        <div className="workout__details">*/}
        {/*            <span className="workout__icon">??????</span>*/}
        {/*            <span className="workout__value">16</span>*/}
        {/*            <span className="workout__unit">km/h</span>*/}
        {/*        </div>*/}
        {/*        <div className="workout__details">*/}
        {/*            <span className="workout__icon">???</span>*/}
        {/*            <span className="workout__value">223</span>*/}
        {/*            <span className="workout__unit">m</span>*/}
        {/*        </div>*/}
        {/*    </li>*/}
      </ul>
  )
}
