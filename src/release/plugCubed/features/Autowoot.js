define(['plugCubed/handlers/TriggerHandler', 'plugCubed/Settings', 'plugCubed/RoomSettings', 'plugCubed/Utils'], function(TriggerHandler, Settings, RoomSettings, p3Utils) {
    var woot, handler;

    woot = function() {
        var dj = API.getDJ();
        if (dj === null || dj.id === API.getUser().id) return;
        $('#woot').click();
    };

    handler = TriggerHandler.extend({
        trigger: 'advance',
        handler: function(data) {
            if (!data.media || !Settings.autowoot || !RoomSettings.rules.allowAutowoot) return;
            setTimeout(function() {
                woot();
            }, p3Utils.randomRange(1, 10) * 1000);
        }
    });

    return new handler();
});