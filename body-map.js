const SVG_NS = "http://www.w3.org/2000/svg";

const frontZones = [
  { id: "front.face", label: "Rosto e cabeça", side: "central", region: "Cabeça", shape: "ellipse", cx: 267, cy: 258, rx: 58, ry: 80 },
  { id: "front.cervical", label: "Cervical anterior", side: "central", region: "Cervical", shape: "path", d: "M226 340 L307 340 L320 398 L213 398 Z" },
  { id: "front.shoulder.right", label: "Ombro direito", side: "direito", region: "Ombro", shape: "path", d: "M112 388 Q158 356 213 367 L220 468 Q163 487 124 474 Z" },
  { id: "front.shoulder.left", label: "Ombro esquerdo", side: "esquerdo", region: "Ombro", shape: "path", d: "M321 367 Q376 356 422 388 L410 474 Q370 487 314 468 Z" },
  { id: "front.chest.right", label: "Peitoral direito", side: "direito", region: "Peitoral", shape: "path", d: "M180 400 L263 395 L263 552 L178 542 Z" },
  { id: "front.chest.left", label: "Peitoral esquerdo", side: "esquerdo", region: "Peitoral", shape: "path", d: "M263 395 L354 400 L356 542 L263 552 Z" },
  { id: "front.upperArm.right", label: "Braço direito, parte anterior", side: "direito", region: "Braço", shape: "path", d: "M112 472 Q151 463 169 488 L145 687 Q111 703 78 686 Z" },
  { id: "front.upperArm.left", label: "Braço esquerdo, parte anterior", side: "esquerdo", region: "Braço", shape: "path", d: "M365 488 Q383 463 422 472 L456 686 Q423 703 389 687 Z" },
  { id: "front.forearm.right", label: "Antebraço direito", side: "direito", region: "Antebraço", shape: "path", d: "M78 686 Q111 696 145 687 L126 827 Q91 848 58 826 Z" },
  { id: "front.forearm.left", label: "Antebraço esquerdo", side: "esquerdo", region: "Antebraço", shape: "path", d: "M389 687 Q423 696 456 686 L476 826 Q443 848 408 827 Z" },
  { id: "front.abdomen", label: "Abdômen", side: "central", region: "Abdômen", shape: "path", d: "M184 552 Q267 570 350 552 L365 741 Q267 765 169 741 Z" },
  { id: "front.hip.right", label: "Quadril direito", side: "direito", region: "Quadril", shape: "path", d: "M169 741 L267 757 L257 875 L137 866 Z" },
  { id: "front.hip.left", label: "Quadril esquerdo", side: "esquerdo", region: "Quadril", shape: "path", d: "M267 757 L365 741 L397 866 L277 875 Z" },
  { id: "front.quad.right", label: "Quadríceps direito", side: "direito", region: "Quadríceps", shape: "path", d: "M137 866 L257 875 L247 1071 Q195 1096 142 1069 Z" },
  { id: "front.quad.left", label: "Quadríceps esquerdo", side: "esquerdo", region: "Quadríceps", shape: "path", d: "M277 875 L397 866 L392 1069 Q339 1096 287 1071 Z" },
  { id: "front.knee.right", label: "Joelho direito", side: "direito", region: "Joelho", shape: "ellipse", cx: 195, cy: 1097, rx: 55, ry: 49 },
  { id: "front.knee.left", label: "Joelho esquerdo", side: "esquerdo", region: "Joelho", shape: "ellipse", cx: 339, cy: 1097, rx: 55, ry: 49 },
  { id: "front.shin.right", label: "Canela direita", side: "direito", region: "Canela", shape: "path", d: "M142 1140 Q195 1126 247 1140 L235 1328 L143 1328 Z" },
  { id: "front.shin.left", label: "Canela esquerda", side: "esquerdo", region: "Canela", shape: "path", d: "M287 1140 Q339 1126 392 1140 L391 1328 L299 1328 Z" },
  { id: "front.foot.right", label: "Pé direito", side: "direito", region: "Pé", shape: "path", d: "M116 1325 L235 1325 L243 1418 L88 1418 Z" },
  { id: "front.foot.left", label: "Pé esquerdo", side: "esquerdo", region: "Pé", shape: "path", d: "M299 1325 L418 1325 L446 1418 L291 1418 Z" },
];

const backZones = [
  { id: "back.occipital", label: "Parte posterior da cabeça", side: "central", region: "Cabeça", shape: "ellipse", cx: 243, cy: 258, rx: 58, ry: 80 },
  { id: "back.cervical", label: "Cervical posterior", side: "central", region: "Cervical", shape: "path", d: "M202 340 L283 340 L296 402 L189 402 Z" },
  { id: "back.shoulder.left", label: "Ombro esquerdo", side: "esquerdo", region: "Ombro", shape: "path", d: "M91 390 Q139 357 194 371 L205 469 Q147 489 108 475 Z" },
  { id: "back.shoulder.right", label: "Ombro direito", side: "direito", region: "Ombro", shape: "path", d: "M291 371 Q346 357 394 390 L410 475 Q371 489 313 469 Z" },
  { id: "back.upperBack.left", label: "Dorsal esquerdo", side: "esquerdo", region: "Dorsal", shape: "path", d: "M161 405 L243 397 L243 604 L154 620 Z" },
  { id: "back.upperBack.right", label: "Dorsal direito", side: "direito", region: "Dorsal", shape: "path", d: "M243 397 L325 405 L332 620 L243 604 Z" },
  { id: "back.upperArm.left", label: "Braço esquerdo, parte posterior", side: "esquerdo", region: "Braço", shape: "path", d: "M93 473 Q131 463 154 489 L128 688 Q94 704 62 685 Z" },
  { id: "back.upperArm.right", label: "Braço direito, parte posterior", side: "direito", region: "Braço", shape: "path", d: "M332 489 Q355 463 393 473 L424 685 Q392 704 358 688 Z" },
  { id: "back.forearm.left", label: "Antebraço esquerdo", side: "esquerdo", region: "Antebraço", shape: "path", d: "M62 685 Q94 696 128 688 L109 830 Q76 848 43 827 Z" },
  { id: "back.forearm.right", label: "Antebraço direito", side: "direito", region: "Antebraço", shape: "path", d: "M358 688 Q392 696 424 685 L443 827 Q410 848 377 830 Z" },
  { id: "back.lowerBack.left", label: "Lombar esquerda", side: "esquerdo", region: "Lombar", shape: "path", d: "M154 620 L243 604 L243 754 L151 761 Z" },
  { id: "back.lowerBack.right", label: "Lombar direita", side: "direito", region: "Lombar", shape: "path", d: "M243 604 L332 620 L335 761 L243 754 Z" },
  { id: "back.glute.left", label: "Glúteo esquerdo", side: "esquerdo", region: "Glúteo", shape: "path", d: "M151 761 L243 754 L243 899 Q184 915 142 876 Z" },
  { id: "back.glute.right", label: "Glúteo direito", side: "direito", region: "Glúteo", shape: "path", d: "M243 754 L335 761 L344 876 Q302 915 243 899 Z" },
  { id: "back.hamstring.left", label: "Posterior de coxa esquerda", side: "esquerdo", region: "Posterior de coxa", shape: "path", d: "M142 876 Q184 909 243 899 L230 1075 Q181 1095 129 1070 Z" },
  { id: "back.hamstring.right", label: "Posterior de coxa direita", side: "direito", region: "Posterior de coxa", shape: "path", d: "M243 899 Q302 909 344 876 L357 1070 Q305 1095 256 1075 Z" },
  { id: "back.knee.left", label: "Parte posterior do joelho esquerdo", side: "esquerdo", region: "Joelho", shape: "ellipse", cx: 181, cy: 1098, rx: 54, ry: 48 },
  { id: "back.knee.right", label: "Parte posterior do joelho direito", side: "direito", region: "Joelho", shape: "ellipse", cx: 305, cy: 1098, rx: 54, ry: 48 },
  { id: "back.calf.left", label: "Panturrilha esquerda", side: "esquerdo", region: "Panturrilha", shape: "path", d: "M129 1140 Q181 1126 230 1140 L218 1328 L127 1328 Z" },
  { id: "back.calf.right", label: "Panturrilha direita", side: "direito", region: "Panturrilha", shape: "path", d: "M256 1140 Q305 1126 357 1140 L359 1328 L268 1328 Z" },
  { id: "back.foot.left", label: "Calcanhar e pé esquerdo", side: "esquerdo", region: "Pé", shape: "path", d: "M101 1325 L218 1325 L226 1418 L74 1418 Z" },
  { id: "back.foot.right", label: "Calcanhar e pé direito", side: "direito", region: "Pé", shape: "path", d: "M268 1325 L385 1325 L412 1418 L260 1418 Z" },
];

export const BODY_MAP_ZONES = Object.freeze({
  front: Object.freeze(frontZones),
  back: Object.freeze(backZones),
});

function zoneCenter(zone) {
  if (zone.shape === "ellipse") return { x: zone.cx, y: zone.cy };
  const numbers = zone.d.match(/-?\d+(?:\.\d+)?/g).map(Number);
  const xs = numbers.filter((_, index) => index % 2 === 0);
  const ys = numbers.filter((_, index) => index % 2 === 1);
  return {
    x: xs.reduce((sum, value) => sum + value, 0) / xs.length,
    y: ys.reduce((sum, value) => sum + value, 0) / ys.length,
  };
}

function zoneBounds(zone) {
  if (zone.shape === "ellipse") {
    return {
      minX: zone.cx - zone.rx,
      maxX: zone.cx + zone.rx,
      minY: zone.cy - zone.ry,
      maxY: zone.cy + zone.ry,
    };
  }
  const numbers = zone.d.match(/-?\d+(?:\.\d+)?/g).map(Number);
  const xs = numbers.filter((_, index) => index % 2 === 0);
  const ys = numbers.filter((_, index) => index % 2 === 1);
  return {
    minX: Math.min(...xs),
    maxX: Math.max(...xs),
    minY: Math.min(...ys),
    maxY: Math.max(...ys),
  };
}

function createSvgNode(tag, attributes = {}) {
  const node = document.createElementNS(SVG_NS, tag);
  Object.entries(attributes).forEach(([name, value]) => node.setAttribute(name, String(value)));
  return node;
}

function bodyMapMarkup(profileSex) {
  const label = profileSex === "female" ? "Feminina" : "Masculina";
  const alternate = profileSex === "female" ? "masculina" : "feminina";
  return `
    <section class="body-map-module" aria-labelledby="body-map-title">
      <header class="body-profile-reference">
        <span><small>MODELO DO MAPA</small><strong>${label}</strong></span>
        <button type="button" class="text-button" data-body-sex-toggle>Ver referência ${alternate}</button>
      </header>
      <div class="body-map-layout">
        <section class="body-map-card">
          <div class="body-view-tabs" role="tablist" aria-label="Vista corporal">
            <button class="is-active" type="button" role="tab" data-body-view="front" aria-selected="true">Frente</button>
            <button type="button" role="tab" data-body-view="back" aria-selected="false">Costas</button>
          </div>
          <div class="body-atlas-stage" data-body-atlas-stage>
            <img class="body-atlas" src="assets/body-map/${profileSex}-atlas.png" alt="" draggable="false" />
            <svg class="body-zone-layer" viewBox="0 0 512 1536" preserveAspectRatio="xMidYMid meet" aria-label="Mapa corporal interativo"></svg>
            <p class="body-atlas-hint">Toque na região do desconforto. A seleção aparece abaixo.</p>
          </div>
        </section>
        <aside class="pain-panel">
          <header>
            <span><small>PONTOS MARCADOS</small><strong data-pain-count>0</strong></span>
            <span class="pain-panel__actions">
              <button type="button" class="text-button" data-undo-point disabled>Desfazer último</button>
              <button type="button" class="text-button text-button--danger" data-clear-points disabled>Limpar todos</button>
            </span>
          </header>
          <div class="pain-selection-list" data-pain-list>
            <p class="empty-selection">Nenhum ponto marcado.</p>
          </div>
          <div class="pain-intensity-block" data-pain-intensity hidden>
            <span>Intensidade do último ponto</span>
            <div role="group" aria-label="Intensidade da dor">
              ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => `<button type="button" data-intensity="${value}">${value}</button>`).join("")}
            </div>
          </div>
          <details class="region-picker">
            <summary>Prefiro escolher pela lista</summary>
            <div data-region-picker></div>
          </details>
        </aside>
      </div>
      <p class="body-map-note">
        O mapa ajuda a indicar a região do desconforto e não substitui avaliação profissional.
      </p>
    </section>`;
}

export function validateBodyMapCatalog() {
  const errors = [];
  const allZones = [...BODY_MAP_ZONES.front, ...BODY_MAP_ZONES.back];
  const ids = new Set();

  allZones.forEach((zone) => {
    if (ids.has(zone.id)) errors.push(`ID duplicado: ${zone.id}`);
    ids.add(zone.id);
    if (!zone.label || !zone.region || !zone.side) errors.push(`Metadados incompletos: ${zone.id}`);
    const center = zoneCenter(zone);
    if (center.x < 0 || center.x > 512 || center.y < 0 || center.y > 1536) {
      errors.push(`Centro fora da prancha: ${zone.id}`);
    }
  });

  ["front.face", "front.cervical", "back.occipital", "back.cervical"].forEach((id) => {
    if (!ids.has(id)) errors.push(`Zona obrigatória ausente: ${id}`);
  });

  [
    ["front.face", "front.cervical"],
    ["back.occipital", "back.cervical"],
  ].forEach(([headId, neckId]) => {
    const head = allZones.find((zone) => zone.id === headId);
    const neck = allZones.find((zone) => zone.id === neckId);
    if (head && neck && zoneBounds(head).maxY > zoneBounds(neck).minY) {
      errors.push(`Sobreposição entre cabeça e cervical: ${headId} / ${neckId}`);
    }
  });

  return { valid: errors.length === 0, errors, zoneCount: allZones.length };
}

export function mountBodyMap(container, options = {}) {
  const initialSex = options.profileSex || "female";
  const state = {
    view: "front",
    sex: initialSex,
    points: Array.isArray(options.initialPoints)
      ? options.initialPoints.map((point) => ({ ...point, sex: point.sex || initialSex }))
      : [],
    sequence: 0,
  };

  container.innerHTML = bodyMapMarkup(state.sex);

  const atlas = container.querySelector(".body-atlas");
  const zoneLayer = container.querySelector(".body-zone-layer");
  const list = container.querySelector("[data-pain-list]");
  const count = container.querySelector("[data-pain-count]");
  const undo = container.querySelector("[data-undo-point]");
  const clear = container.querySelector("[data-clear-points]");
  const intensityBlock = container.querySelector("[data-pain-intensity]");
  const regionPicker = container.querySelector("[data-region-picker]");

  function emitChange() {
    options.onChange?.(
      state.points
        .filter((point) => point.sex === state.sex)
        .map((point) => ({ ...point })),
    );
  }

  function markerPointFromEvent(event) {
    const point = zoneLayer.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;
    const matrix = zoneLayer.getScreenCTM();
    if (!matrix) return null;
    return point.matrixTransform(matrix.inverse());
  }

  function removePoint(pointId) {
    state.points = state.points.filter((point) => point.id !== pointId);
    render();
    emitChange();
  }

  function addPoint(zone, coordinates) {
    const fallback = zoneCenter(zone);
    state.sequence += 1;
    state.points.push({
      id: `pain-${Date.now()}-${state.sequence}`,
      regionId: zone.id,
      label: zone.label,
      region: zone.region,
      side: zone.side,
      view: state.view,
      sex: state.sex,
      x: Math.round(coordinates?.x ?? fallback.x),
      y: Math.round(coordinates?.y ?? fallback.y),
      intensity: null,
    });
    render();
    emitChange();
  }

  function renderZones() {
    zoneLayer.replaceChildren();
    const selectedRegionIds = new Set(
      state.points
        .filter((point) => point.view === state.view && point.sex === state.sex)
        .map((point) => point.regionId),
    );

    BODY_MAP_ZONES[state.view].forEach((zone) => {
      const attributes = zone.shape === "ellipse"
        ? { cx: zone.cx, cy: zone.cy, rx: zone.rx, ry: zone.ry }
        : { d: zone.d };
      const node = createSvgNode(zone.shape, {
        ...attributes,
        class: `body-zone${selectedRegionIds.has(zone.id) ? " is-selected" : ""}`,
        "data-zone-id": zone.id,
        tabindex: "0",
        role: "button",
        "aria-label": `Marcar ${zone.label}`,
      });
      node.addEventListener("click", (event) => {
        event.stopPropagation();
        addPoint(zone, markerPointFromEvent(event));
      });
      node.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        addPoint(zone, zoneCenter(zone));
      });
      zoneLayer.append(node);
    });

    state.points
      .filter((point) => point.view === state.view && point.sex === state.sex)
      .forEach((point, index) => {
        const marker = createSvgNode("g", {
          class: "body-marker",
          transform: `translate(${point.x} ${point.y})`,
          tabindex: "0",
          role: "button",
          "aria-label": `Remover ${point.label}`,
        });
        marker.append(
          createSvgNode("circle", { r: 36, class: "body-marker__hit" }),
          createSvgNode("circle", { r: 22, class: "body-marker__halo" }),
          createSvgNode("circle", { r: 10, class: "body-marker__dot" }),
        );
        const number = createSvgNode("text", { x: 0, y: 4, "text-anchor": "middle" });
        number.textContent = String(index + 1);
        marker.append(number);
        marker.addEventListener("click", (event) => {
          event.stopPropagation();
          removePoint(point.id);
        });
        marker.addEventListener("keydown", (event) => {
          if (event.key !== "Enter" && event.key !== " ") return;
          event.preventDefault();
          removePoint(point.id);
        });
        zoneLayer.append(marker);
      });
  }

  function renderList() {
    const visiblePoints = state.points.filter((point) => point.sex === state.sex);
    count.textContent = String(visiblePoints.length);
    undo.disabled = visiblePoints.length === 0;
    clear.disabled = visiblePoints.length === 0;
    intensityBlock.hidden = visiblePoints.length === 0;

    if (visiblePoints.length === 0) {
      list.innerHTML = '<p class="empty-selection">Nenhum ponto marcado.</p>';
    } else {
      list.innerHTML = visiblePoints
        .map((point, index) => `
          <article class="pain-selection">
            <span class="pain-selection__index">${index + 1}</span>
            <span><strong>${point.label}</strong><small>${point.view === "front" ? "Frente" : "Costas"}${point.intensity ? ` · intensidade ${point.intensity}` : ""}</small></span>
            <button type="button" data-remove-point="${point.id}" aria-label="Remover ${point.label}">Remover</button>
          </article>`)
        .join("");
      list.querySelectorAll("[data-remove-point]").forEach((button) => {
        button.addEventListener("click", () => removePoint(button.dataset.removePoint));
      });
    }

    const latestPoint = visiblePoints.at(-1);
    intensityBlock.querySelectorAll("[data-intensity]").forEach((button) => {
      button.classList.toggle("is-selected", Number(button.dataset.intensity) === latestPoint?.intensity);
    });
  }

  function renderPicker() {
    regionPicker.innerHTML = BODY_MAP_ZONES[state.view]
      .map((zone) => `<button type="button" data-picker-zone="${zone.id}">${zone.label}</button>`)
      .join("");
    regionPicker.querySelectorAll("[data-picker-zone]").forEach((button) => {
      button.addEventListener("click", () => {
        const zone = BODY_MAP_ZONES[state.view].find((item) => item.id === button.dataset.pickerZone);
        addPoint(zone, zoneCenter(zone));
      });
    });
  }

  function render() {
    atlas.src = `assets/body-map/${state.sex}-atlas.png`;
    atlas.classList.toggle("is-back", state.view === "back");
    renderZones();
    renderList();
    renderPicker();
  }

  container.querySelectorAll("[data-body-view]").forEach((button) => {
    button.addEventListener("click", () => {
      state.view = button.dataset.bodyView;
      container.querySelectorAll("[data-body-view]").forEach((option) => {
        const selected = option === button;
        option.classList.toggle("is-active", selected);
        option.setAttribute("aria-selected", String(selected));
      });
      render();
    });
  });

  container.querySelector("[data-body-sex-toggle]").addEventListener("click", () => {
    state.sex = state.sex === "female" ? "male" : "female";
    container.querySelector(".body-profile-reference strong").textContent = state.sex === "female" ? "Feminina" : "Masculina";
    container.querySelector("[data-body-sex-toggle]").textContent = `Ver referência ${state.sex === "female" ? "masculina" : "feminina"}`;
    render();
    emitChange();
  });

  undo.addEventListener("click", () => {
    const latest = state.points.filter((point) => point.sex === state.sex).at(-1);
    if (latest) removePoint(latest.id);
  });

  clear.addEventListener("click", () => {
    state.points = state.points.filter((point) => point.sex !== state.sex);
    render();
    emitChange();
  });

  intensityBlock.querySelectorAll("[data-intensity]").forEach((button) => {
    button.addEventListener("click", () => {
      const latest = state.points.filter((point) => point.sex === state.sex).at(-1);
      if (!latest) return;
      latest.intensity = Number(button.dataset.intensity);
      renderList();
      emitChange();
    });
  });

  render();

  return {
    getPoints: () => state.points
      .filter((point) => point.sex === state.sex)
      .map((point) => ({ ...point })),
    clear: () => {
      state.points = state.points.filter((point) => point.sex !== state.sex);
      render();
      emitChange();
    },
    setView: (view) => {
      if (!BODY_MAP_ZONES[view]) return;
      state.view = view;
      render();
    },
  };
}
