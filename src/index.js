import React from "react";
import ReactDOM from "react-dom";
import { Row, Col } from "react-simple-flex-grid";

import Nav from "./shared/Nav";

import "./styles/global.css";
import "react-simple-flex-grid/lib/main.css";

const Index = () => {
  return (
    <div>
      <Nav />
      <Row>
        <Col span={2} />
        <Col span={8}>
          <p className="intro">
            30x40 — 30 terawatts of solar and wind energy around the world by
            the year 2040 in order to avoid the most harmful and dangerous
            effects of global warming and climate change.
          </p>
        </Col>
        <Col span={2} />
      </Row>
      <Row>
        <Col span={12}>
          <p className="placeholder">interactive model</p>
        </Col>
      </Row>
      <Row>
        <Col span={3} />
        <Col span={6}>
          <h3>Change the Conversation</h3>

          <p>
            For too long now the conversation and debate about climate change
            has focused on one thing: limits. We’ve been told that our only
            options are to stop, reduce, and limit: reduce greenhouse gas
            emissions, limit our energy use, slow our economy, and even limit
            our freedom. But today the conversation has changed. We can solve
            the problems of global warming and climate change not by limiting
            but by growing; not by scaling back or slowing down but by speeding
            up and building out. Rather than argue over what we can’t do, we
            understand now what we can do. We can produce new energy. We can
            make our economy bigger, stronger, and more durable. We can create
            new jobs: skilled, high-paying jobs. We can create almost unlimited
            opportunities for new investment. We can solve global warming and
            have the energy we need, the jobs we want, and the economy that all
            of us deserve. We can simultaneously provide energy to billions
            while preventing the build-up of pollution in our atmosphere. We
            don’t need to cut, reduce, limit, or scale back. Instead, we build,
            develop, create, and grow. And we are doing it now.
          </p>

          <h3>Carbon Dioxide and Global Warming</h3>

          <p>
            Because of human activity, levels of carbon dioxide in Earth’s
            atmosphere have been rising year after year – increasing 15% in just
            the past 30 years. Every day, humans pump 100 million tons of carbon
            dioxide into the Earth’s atmosphere from fossil fuel burning. We are
            the first humans in history to ever live on the Earth when so much
            carbon dioxide is in our atmosphere. The last time the Earth had so
            much carbon dioxide in the air – over 400 parts per million (ppm) –
            the oceans were 80 feet higher than today, the Earth’s average
            temperature was 10 degrees warmer, and humans didn’t exist. More
            here
          </p>

          <h3>The Carbon Clock is Ticking</h3>

          <p>Text here</p>

          <h3>How much can we emit?</h3>

          <p>Does not mean stopping fossil fuel use</p>

          <h3>Countdown Clock</h3>

          <p>We’ve Already Started Explain Solar and Wind</p>

          <h3>Graphs 2003 - 2017 </h3>
        </Col>
        <Col span={3} />
      </Row>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));
