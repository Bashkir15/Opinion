import mongoose from 'mongoose'
import json from '../helpers/json'

var Setting = mongoose.model('Setting');

module.exports = () => {
	var obj = {};

	obj.get = (req, res) => {
		if (req.user) {
			Setting.findOne({creator: req.user._id})
			.exec((err, setting) => {
				var hasNoSettings;

				if (err) {
					return json.bad(err, res);
				}

				if (!setting) {
					return json.good({
						hasNoSettings: hasNoSettings
					}, res);
				}

				json.good({
					item: item
				}, res);
			});
		}
	};

	obj.update = (req, res) => {
		Setting.findOne({creator: req.user._id})
		.exec((err, setting) => {
			if (err) {
				return json.bad(err, res);
			}

			setting.theme = req.body.theme || setting.theme;
			setting.profile.hideEmail = req.body.email || setting.profile.hideEmail;
			setting.profile.hideGender = req.body.gender || setting.profile.hideGender;
			setting.profile.hidePhone = req.body.phone || settings.profile.hidePhone;
			setting.profile.hideInterests = req.body.interests || settings.profile.hideInterests;
			setting.profile.hideOccupation = req.body.occupation || settings.profile.hideOccupation;
			setting.profile.hideBio = req.body.bio || settings.profile.hideBio;
			setting.profile.hideFollowing = req.body.following || setting.profile.hideFollowing;
			setting.profile.hideSaved = req.body.saved || setting.profile.hideSaved;
			setting.profile.hideActivity = req.body.saved || setting.profile.hideActivity;
			setting.lastUpdated = Date.now();

			setting.save((err, item) => {
				if (err) {
					return json.bad(err, res);
				}

				json.good({
					record: item
				}, res);
			});
		});
	};

	return obj;
};