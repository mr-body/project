var tabButtons = $(".tabContainer .buttonContainer button");
var tabPanels = $(".tabContainer .tabPanel");

function showPanel(panelIndex, colorCode) {
    tabButtons.each(function(index, node) {
        $(node).css("backgroundColor", "");
        $(node).css("color", "");
    });
    $(tabButtons[panelIndex]).css("backgroundColor", colorCode);
    //$(tabButtons[panelIndex]).css("color", "white");
    tabPanels.each(function(index, node) {
        $(node).css("display", "none");
    });
    $(tabPanels[panelIndex]).css("display", "block");
    //$(tabPanels[panelIndex]).css("backgroundColor", colorCode);
}

showPanel(0, '#d7d4d4');