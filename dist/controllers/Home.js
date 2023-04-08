"use strict";Object.defineProperty(exports, "__esModule", {value: true});class Home {
  index(req, res) {
    res.json(
      {
        tudoCerto: true,
      },
    );
  }
}

exports. default = new Home();
