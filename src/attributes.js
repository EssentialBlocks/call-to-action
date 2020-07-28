const attributes = {
	marginTop: {
		type: "number",
	},
	marginRight: {
		type: "number",
	},
	marginBottom: {
		type: "number",
	},
	marginLeft: {
		type: "number",
	},
	paddingTop: {
		type: "number",
	},
	paddingRight: {
		type: "number",
	},
	paddingBottom: {
		type: "number",
	},
	paddingLeft: {
		type: "number",
	},
	contentStyle: {
		type: "string",
		default: "basic",
	},
	contentAlign: {
		type: "string",
		default: "center",
	},
	backgroundType: {
		type: "string",
		default: "color",
	},
	backgroundColor: {
		type: "string",
	},
	backgroundGradient: {
		type: "string",
		default: "linear-gradient(45deg, #36D1DC , #5B86E5)",
	},
	backgroundImageURL: {
		type: "string",
	},
	backgroundImageID: {
		type: "string",
	},
	icon: {
		type: "string",
		source: "attribute",
		selector: ".eb-cia-wrapper",
		attribute: "data-icon",
		default: "fas fa-glass-martini",
	},
	iconSize: {
		type: "number",
	},
	iconColor: {
		type: "string",
	},
	title: {
		type: "string",
		selector: ".eb-cia-title",
		default: "Essential Blocks for Gutenberg",
	},
	titleTag: {
		type: "string",
		default: "h3",
	},
	titleFontSize: {
		type: "number",
	},
	titleColor: {
		type: "string",
	},
	description: {
		type: "string",
		selector: ".eb-cia-description",
		default:
			"Add a strong one liner supporting the heading above and giving users a reason to click on the button below.",
	},
	descriptionFontSize: {
		type: "number",
	},
	descriptionColor: {
		type: "string",
	},
	buttonText: {
		type: "string",
		souce: "html",
		selector: ".eb-cia-button",
		default: "Button Text",
	},
	buttonURL: {
		type: "string",
	},
	buttonSize: {
		type: "string",
		default: "large",
	},
	buttonTextSize: {
		type: "number",
	},
	buttonBackgroundColor: {
		type: "string",
	},
	buttonHoverBackgroundColor: {
		type: "string",
		default: "#3074ff",
	},
	isHover: {
		type: "boolean",
		default: false,
	},
	buttonTextColor: {
		type: "string",
	},
	buttonHoverTextColor: {
		type: "string",
		default: "#edf1f7",
	},
	buttonPaddingTop: {
		type: "number",
		default: 12,
	},
	buttonPaddingRight: {
		type: "number",
		default: 30,
	},
	buttonPaddingBottom: {
		type: "number",
		default: 12,
	},
	buttonPaddingLeft: {
		type: "number",
		default: 30,
	},
	buttonBorderRadius: {
		type: "number",
	},
	shadowColor: {
		type: "string",
	},
	hOffset: {
		type: "number",
	},
	vOffset: {
		type: "number",
	},
	blur: {
		type: "number",
	},
	spread: {
		type: "number",
	},
	paddingUnit: {
		type: "string",
		default: "px",
	},
	marginUnit: {
		type: "string",
		default: "px",
	},
	titleSizeUnit: {
		type: "string",
		default: "px",
	},
	descriptionSizeUnit: {
		type: "string",
		default: "px",
	},
	buttonSizeUnit: {
		type: "string",
		default: "px",
	},
	buttonRadiusUnit: {
		type: "string",
		default: "px",
	},
	iconSizeUnit: {
		type: "string",
		default: "px",
	},
	titleFontFamily: {
		type: "string",
	},
	titleFontWeight: {
		type: "string",
		default: "normal",
	},
	titleLetterSpacing: {
		type: "number",
	},
	titleLetterSpacingUnit: {
		type: "string",
		default: "px",
	},
	titleLineHeight: {
		type: "number",
	},
	titleLineHeightUnit: {
		type: "string",
		default: "px",
	},
	descFontFamily: {
		type: "string",
	},
	descFontWeight: {
		type: "string",
		default: "normal",
	},
	descLetterSpacing: {
		type: "number",
	},
	descLetterSpacingUnit: {
		type: "string",
		default: "px",
	},
	descLineHeight: {
		type: "number",
	},
	descLineHeightUnit: {
		type: "string",
		default: "px",
	},
	bgPosition: {
		type: "string",
	},
	bgXPos: {
		type: "number",
		default: 0,
	},
	bgXPosUnit: {
		type: "string",
		default: "%",
	},
	bgYPos: {
		type: "number",
		default: 0,
	},
	bgYPosUnit: {
		type: "string",
		default: "%",
	},
	bgSize: {
		type: "string",
	},
	bgWidth: {
		type: "number",
	},
	bgWidthUnit: {
		type: "string",
		default: "%",
	},
	bgRepeat: {
		type: "string",
	},
	bgAttachment: {
		type: "string",
	},
};

export default attributes;
