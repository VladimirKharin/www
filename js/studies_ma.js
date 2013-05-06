function studyInit(studyObj, type) {

    studyObj.studyType = type;
    studyObj.editingState = ko.observable(false);

}

function studyMovingAverage() {
	var self = this;

	studyInit(self, 'MA');

	self.availableMethods = ko.observableArray(['Simple', 'Exp']);
	self.availablePriceFields = ko.observableArray(['Close', 'Open', 'High', 'Low', '(H + L) / 2', '(C + H + L) / 3', '(O + C + H + L) / 4']);

	self.period = ko.observable(14);
	self.method = ko.observable(self.availableMethods()[0]);
	self.priceField = ko.observable(self.availablePriceFields()[0]);

	self.periodEd = ko.observable(self.period());
	self.methodEd = ko.observable(self.method());
	self.priceFieldEd = ko.observable(self.priceField());

	self.getStudyShortDescr = ko.computed(function () {
	    var descr = '';
	    if (self.method() == "Simple")
	        descr = 'SMA'
	    else if (self.method() == "Exp")
	        descr = 'EMA';
	    return descr + ' (' + self.period().toString() + ')';
	});

	self.setToEditingState = function () {
	    this.editingState(true);

	    self.periodEd(self.period());
	    self.methodEd(self.method());
	    self.priceFieldEd(self.priceField());
	}

	self.studyApplyChanges = function () {
	    this.editingState(false);

	    self.period(self.periodEd());
	    self.method(self.methodEd());
	    self.priceField(self.priceFieldEd());
	}

	self.studyCancelChanges = function () {
	    this.editingState(false);
	}
}
