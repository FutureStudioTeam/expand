export default [
    "python: {\r\n    \"import_codey\": {\r\n        \"prefix\": \"import codey, rocky, time, event\",\r\n        \"body\": \"import codey, rocky, time, event\",\r\n        \"description\": \"import codey modules\",\r\n        \"kind\": \"Snippet\"\r\n    },\r\n    \"import_rocky\": {\r\n        \"prefix\": \"import rocky\",\r\n        \"body\": \"import rocky\",\r\n        \"description\": \"import rocky module\",\r\n        \"kind\": \"Snippet\"\r\n    },\r\n    \"import_event\": {\r\n        \"prefix\": \"import event\",\r\n        \"body\": \"import event\",\r\n        \"description\": \"import event module\",\r\n        \"kind\": \"Snippet\"\r\n    },\r\n    \"codey\": {\r\n        \"prefix\": \"codey\",\r\n        \"body\": \"codey\",\r\n        \"description\": \"codey module\",\r\n        \"kind\": \"Module\"\r\n    },\r\n    \"rocky\": {\r\n        \"prefix\": \"rocky\",\r\n        \"body\": \"rocky\",\r\n        \"description\": \"rocky module\",\r\n        \"kind\": \"Module\"\r\n    },\r\n    \"display\": {\r\n        \"prefix\": \"display\",\r\n        \"body\": \"codey.display\",\r\n        \"description\": \"codey display module\",\r\n        \"kind\": \"Module\"\r\n    },\r\n    \"show_image\": {\r\n        \"prefix\": \"codey.display.show_image\",\r\n        \"body\": \"codey.display.show_image(${1:'00003c7e7e3c000000003c7e7e3c0000'})\",\r\n        \"description\": \"codey show image\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"show_image_secs\": {\r\n        \"prefix\": \"codey.display.show_image_secs\",\r\n        \"body\": \"codey.display.show_image(${1:'00003c7e7e3c000000003c7e7e3c0000'}, time_s=${secs:1})\",\r\n        \"description\": \"codey show image seconds\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"show_image_at_position\": {\r\n        \"prefix\": \"codey.display.show_image_at_position\",\r\n        \"body\": \"codey.display.show_image(${1:'00003c7e7e3c000000003c7e7e3c0000'}, ${x:0}, ${y:0})\",\r\n        \"description\": \"codey show image at position\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"display_clear\": {\r\n        \"prefix\": \"codey.display.clear\",\r\n        \"body\": \"codey.display.clear()\",\r\n        \"description\": \"codey clear image\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"show_text\": {\r\n        \"prefix\": \"codey.display.show\",\r\n        \"body\": \"codey.display.show(${text:'hello'}, wait=${wait:False})\",\r\n        \"description\": \"codey show text\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"show_text_until_done\": {\r\n        \"prefix\": \"codey.display.show_until_done\",\r\n        \"body\": \"codey.display.show(${text:'hello'})\",\r\n        \"description\": \"codey show text until done\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"show_text_at_position\": {\r\n        \"prefix\": \"codey.display.show_text_at_position\",\r\n        \"body\": \"codey.display.show(${text:'hello'}, ${x:0}, ${y:0})\",\r\n        \"description\": \"codey show text at position\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"light_up_pixel\": {\r\n        \"prefix\": \"codey.display.light_up_pixel\",\r\n        \"body\": \"codey.display.set_pixel(${x:0}, ${y:0}, True)\",\r\n        \"description\": \"codey light up pixel at position\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"light_off_pixel\": {\r\n        \"prefix\": \"codey.display.light_off_pixel\",\r\n        \"body\": \"codey.display.set_pixel(${x:0}, ${y:0}, False)\",\r\n        \"description\": \"codey extinguish pixel at position\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"set_pixel\": {\r\n        \"prefix\": \"codey.display.set_pixel\",\r\n        \"body\": \"codey.display.set_pixel(${x:0}, ${y:0}, ${on:True})\",\r\n        \"description\": \"codey set pixel at position\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"toggle_pixel\": {\r\n        \"prefix\": \"codey.display.toggle_pixel\",\r\n        \"body\": \"codey.display.toggle_pixel(${x:0}, ${y:0})\",\r\n        \"description\": \"codey toggle pixel at position\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"get_pixel\": {\r\n        \"prefix\": \"codey.display.get_pixel\",\r\n        \"body\": \"codey.display.get_pixel(${x:0}, ${y:0})\",\r\n        \"description\": \"codey get pixel at position\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"led\": {\r\n        \"prefix\": \"led\",\r\n        \"body\": \"codey.led\",\r\n        \"description\": \"codey led module\",\r\n        \"kind\": \"Module\"\r\n    },\r\n    \"led_show_secs\": {\r\n        \"prefix\": \"codey.led.show_secs\",\r\n        \"body\": \"codey.led.show(${r:255}, ${g:0}, ${b:0}, ${secs:1})\",\r\n        \"description\": \"codey led show rgb color for seconds\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"led_show\": {\r\n        \"prefix\": \"codey.led.show\",\r\n        \"body\": \"codey.led.show(${r:255}, ${g:0}, ${b:0})\",\r\n        \"description\": \"codey led show rgb color\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"led_set_red\": {\r\n        \"prefix\": \"codey.led.set_red\",\r\n        \"body\": \"codey.led.set_red(${value:255})\",\r\n        \"description\": \"change codey led red color value\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"led_set_green\": {\r\n        \"prefix\": \"codey.led.set_green\",\r\n        \"body\": \"codey.led.set_green(${value:255})\",\r\n        \"description\": \"change codey led green color value\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"led_set_blue\": {\r\n        \"prefix\": \"codey.led.set_blue\",\r\n        \"body\": \"codey.led.set_blue(${value:255})\",\r\n        \"description\": \"change codey led blue color value\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"led_off\": {\r\n        \"prefix\": \"codey.led.off\",\r\n        \"body\": \"codey.led.off()\",\r\n        \"description\": \"turn off codey led\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"color_ir_sensor\": {\r\n        \"prefix\": \"rocky.color_ir_sensor\",\r\n        \"body\": \"rocky.color_ir_sensor\",\r\n        \"description\": \"rocky color_ir_sensor module\",\r\n        \"kind\": \"Module\"\r\n    },\r\n    \"set_led_color\": {\r\n        \"prefix\": \"rocky.set_led_color\",\r\n        \"body\": \"rocky.color_ir_sensor.set_led_color(${1|'red','green','blue','yellow','cyan','purple','white','black'|})\",\r\n        \"description\": \"set rocky led color\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"turn_off_led_color\": {\r\n        \"prefix\": \"rocky.turn_off_led_color\",\r\n        \"body\": \"rocky.color_ir_sensor.set_led_color('black')\",\r\n        \"description\": \"set rocky led color\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"speaker\": {\r\n        \"prefix\": \"codey.speaker\",\r\n        \"body\": \"codey.speaker\",\r\n        \"description\": \"codey speaker module\",\r\n        \"kind\": \"Module\"\r\n    },\r\n    \"play_melody\": {\r\n        \"prefix\": \"codey.speaker.play_melody\",\r\n        \"body\": \"codey.speaker.play_melody(${1|'hello.wav','hi.wav','bye.wav','yeah.wav','wow.wav','laugh.wav','hum.wav','sad.wav','sigh.wav','annoyed.wav','angry.wav','surprised.wav','yummy.wav','curious.wav','embarrassed.wav','ready.wav','sprint.wav','sleepy.wav','meow.wav','start.wav','switch.wav','beeps.wav','buzzing.wav','exhaust.wav','explosion.wav','gotcha.wav','hurt.wav','jump.wav','laser.wav','level up.wav','low energy.wav','metal clash.wav','prompt tone.wav','right.wav','wrong.wav','ring.wav','score.wav','shot.wav','step_1.wav','step_2.wav','wake.wav','warning.wav'})\",\r\n        \"description\": \"codey speaker play sound\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"play_melody_until_done\": {\r\n        \"prefix\": \"codey.speaker.play_melody_until_done\",\r\n        \"body\": \"codey.speaker.play_melody_until_done(${1|'hello.wav','hi.wav','bye.wav','yeah.wav','wow.wav','laugh.wav','hum.wav','sad.wav','sigh.wav','annoyed.wav','angry.wav','surprised.wav','yummy.wav','curious.wav','embarrassed.wav','ready.wav','sprint.wav','sleepy.wav','meow.wav','start.wav','switch.wav','beeps.wav','buzzing.wav','exhaust.wav','explosion.wav','gotcha.wav','hurt.wav','jump.wav','laser.wav','level up.wav','low energy.wav','metal clash.wav','prompt tone.wav','right.wav','wrong.wav','ring.wav','score.wav','shot.wav','step_1.wav','step_2.wav','wake.wav','warning.wav'})\",\r\n        \"description\": \"codey speaker play sound\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"stop_sounds\": {\r\n        \"prefix\": \"codey.speaker.stop_sounds\",\r\n        \"body\": \"codey.speaker.stop_sounds()\",\r\n        \"description\": \"codey speaker stop sounds\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"play_note\": {\r\n        \"prefix\": \"codey.speaker.play_note\",\r\n        \"body\": \"codey.speaker.play_note(${note:60}, ${beats:0.25})\",\r\n        \"description\": \"codey speaker play note for beats\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"speaker_rest\": {\r\n        \"prefix\": \"codey.speaker.rest\",\r\n        \"body\": \"codey.speaker.rest(${beats:0.25})\",\r\n        \"description\": \"codey speaker rest for beats\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"play_tone\": {\r\n        \"prefix\": \"codey.speaker.play_tone\",\r\n        \"body\": \"codey.speaker.play_tone(${hz:700}, ${beats:0.25})\",\r\n        \"description\": \"codey speaker play tone for beats\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"speaker_volume\": {\r\n        \"prefix\": \"codey.speaker.volume\",\r\n        \"body\": \"codey.speaker.volume\",\r\n        \"description\": \"codey speaker volume\",\r\n        \"kind\": \"Property\"\r\n    },\r\n    \"speaker_change_volume_by\": {\r\n        \"prefix\": \"codey.speaker.change_volume_by\",\r\n        \"body\": \"codey.speaker.volume = codey.speaker.volume + (${value:-10})\",\r\n        \"description\": \"codey speaker change volume by\",\r\n        \"kind\": \"Snippet\"\r\n    },\r\n    \"speaker_set_volume\": {\r\n        \"prefix\": \"codey.speaker.set_volume\",\r\n        \"body\": \"codey.speaker.volume = ${value:100}\",\r\n        \"description\": \"codey speaker set volume\",\r\n        \"kind\": \"Snippet\"\r\n    },\r\n    \"forward_secs\": {\r\n        \"prefix\": \"rocky.forward_secs\",\r\n        \"body\": \"rocky.forward(${speed:50}, ${time:1})\",\r\n        \"description\": \"rocky move forward by power for seconds\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"backward_secs\": {\r\n        \"prefix\": \"rocky.backward_secs\",\r\n        \"body\": \"rocky.backward(${speed:50}, ${time:1})\",\r\n        \"description\": \"rocky move backward by power for seconds\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"turn_left_secs\": {\r\n        \"prefix\": \"rocky.turn_left_secs\",\r\n        \"body\": \"rocky.turn_left(${speed:50}, ${time:1})\",\r\n        \"description\": \"rocky move turn left by power for seconds\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"turn_right_secs\": {\r\n        \"prefix\": \"rocky.turn_right_secs\",\r\n        \"body\": \"rocky.turn_right(${speed:50}, ${time:1})\",\r\n        \"description\": \"rocky move turn right by power for seconds\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"forward_straight\": {\r\n        \"prefix\": \"rocky.forward_straight\",\r\n        \"body\": \"rocky.forward(${speed:50}, ${time:1}, straight = True)\",\r\n        \"description\": \"rocky move straight forward by power for seconds\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"backward_straight\": {\r\n        \"prefix\": \"rocky.backward_straight\",\r\n        \"body\": \"rocky.backward(${speed:50}, ${time:1}, straight = True)\",\r\n        \"description\": \"rocky move straight backward by power for seconds\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"turn_left_by_degree\": {\r\n        \"prefix\": \"rocky.turn_left_by_degree\",\r\n        \"body\": \"rocky.turn_left_by_degree(${degree:15})\",\r\n        \"description\": \"rocky turn left by degree until done\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"turn_right_by_degree\": {\r\n        \"prefix\": \"rocky.turn_right_by_degree\",\r\n        \"body\": \"rocky.turn_right_by_degree(${degree:15})\",\r\n        \"description\": \"rocky turn right by degree until done\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"forward\": {\r\n        \"prefix\": \"rocky.forward\",\r\n        \"body\": \"rocky.forward(${speed:50})\",\r\n        \"description\": \"rocky move forward by power\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"backward\": {\r\n        \"prefix\": \"rocky.backward\",\r\n        \"body\": \"rocky.backward(${speed:50})\",\r\n        \"description\": \"rocky move backward by power\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"turn_left\": {\r\n        \"prefix\": \"rocky.turn_left\",\r\n        \"body\": \"rocky.turn_left(${speed:50})\",\r\n        \"description\": \"rocky move turn left by power\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"turn_right\": {\r\n        \"prefix\": \"rocky.turn_right\",\r\n        \"body\": \"rocky.turn_right(${speed:50})\",\r\n        \"description\": \"rocky move turn right by power\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"drive\": {\r\n        \"prefix\": \"rocky.drive\",\r\n        \"body\": \"rocky.drive(${left:50}, ${right:50})\",\r\n        \"description\": \"rocky move by left and right power\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"rocky_stop\": {\r\n        \"prefix\": \"rocky.stop\",\r\n        \"body\": \"rocky.stop()\",\r\n        \"description\": \"rocky stop\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"is_pressed\": {\r\n        \"prefix\": \"codey.button.is_pressed\",\r\n        \"body\": \"codey.button_${1|a,b,c|}.is_pressed()\",\r\n        \"description\": \"is codey button pressed?\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"is_rocky_connected\": {\r\n        \"prefix\": \"codey.is_rocky_connected\",\r\n        \"body\": \"codey.is_rocky_connected()\",\r\n        \"description\": \"is codey connected rocky?\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"potentiometer_value\": {\r\n        \"prefix\": \"codey.potentiometer.get_value\",\r\n        \"body\": \"codey.potentiometer.get_value()\",\r\n        \"description\": \"codey potentiometer value\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"sound_sensor_loundness\": {\r\n        \"prefix\": \"codey.sound_sensor.get_loudness\",\r\n        \"body\": \"codey.sound_sensor.get_loudness()\",\r\n        \"description\": \"codey sound sensor loudness\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"light_sensor_value\": {\r\n        \"prefix\": \"codey.light_sensor.get_value\",\r\n        \"body\": \"codey.light_sensor.get_value()\",\r\n        \"description\": \"codey light sensor value\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"battery_percentage\": {\r\n        \"prefix\": \"codey.battery.get_percentage\",\r\n        \"body\": \"codey.battery.get_percentage()\",\r\n        \"description\": \"codey battery percentage\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"motion_sensor_is_shaked\": {\r\n        \"prefix\": \"codey.motion_sensor.is_shaked\",\r\n        \"body\": \"codey.motion_sensor.is_shaked()\",\r\n        \"description\": \"is codey shaked?\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"motion_sensor_shake_strength\": {\r\n        \"prefix\": \"codey.motion_sensor.get_shake_strength\",\r\n        \"body\": \"codey.motion_sensor.get_shake_strength()\",\r\n        \"description\": \"codey shake strength\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"motion_sensor\": {\r\n        \"prefix\": \"codey.motion_sensor\",\r\n        \"body\": \"codey.motion_sensor\",\r\n        \"description\": \"codey motion sensor module\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"is_tilted_left\": {\r\n        \"prefix\": \"codey.motion_sensor.is_tilted_left\",\r\n        \"body\": \"codey.motion_sensor.is_tilted_left()\",\r\n        \"description\": \"is codey tilted left?\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"is_tilted_right\": {\r\n        \"prefix\": \"codey.motion_sensor.is_tilted_right\",\r\n        \"body\": \"codey.motion_sensor.is_tilted_right()\",\r\n        \"description\": \"is codey tilted right?\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"is_ears_up\": {\r\n        \"prefix\": \"codey.motion_sensor.is_ears_up\",\r\n        \"body\": \"codey.motion_sensor.is_ears_up()\",\r\n        \"description\": \"is codey ears up?\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"is_ears_down\": {\r\n        \"prefix\": \"codey.motion_sensor.is_ears_down\",\r\n        \"body\": \"codey.motion_sensor.is_ears_down()\",\r\n        \"description\": \"is codey ears down?\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"is_display_up\": {\r\n        \"prefix\": \"codey.motion_sensor.is_display_up\",\r\n        \"body\": \"codey.motion_sensor.is_display_up()\",\r\n        \"description\": \"is codey display up?\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"is_display_down\": {\r\n        \"prefix\": \"codey.motion_sensor.is_display_down\",\r\n        \"body\": \"codey.motion_sensor.is_display_down()\",\r\n        \"description\": \"is codey display down?\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"is_upright\": {\r\n        \"prefix\": \"codey.motion_sensor.is_upright\",\r\n        \"body\": \"codey.motion_sensor.is_upright()\",\r\n        \"description\": \"is codey upright?\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"get_roll\": {\r\n        \"prefix\": \"codey.motion_sensor.get_roll\",\r\n        \"body\": \"codey.motion_sensor.get_roll()\",\r\n        \"description\": \"codey roll degree\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"get_pitch\": {\r\n        \"prefix\": \"codey.motion_sensor.get_pitch\",\r\n        \"body\": \"codey.motion_sensor.get_pitch()\",\r\n        \"description\": \"codey pitch degree\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"get_rotation\": {\r\n        \"prefix\": \"codey.motion_sensor.get_rotation\",\r\n        \"body\": \"codey.motion_sensor.get_rotation(${1|'x','y','z'|})\",\r\n        \"description\": \"codey rotation degree\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"reset_rotation\": {\r\n        \"prefix\": \"codey.motion_sensor.reset_rotation\",\r\n        \"body\": \"codey.motion_sensor.reset_rotation(${1|'x','y','z','all'|})\",\r\n        \"description\": \"codey reset rotation\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"get_timer\": {\r\n        \"prefix\": \"codey.motion_sensor.get_timer\",\r\n        \"body\": \"codey.motion_sensor.get_timer()\",\r\n        \"description\": \"codey timer\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"is_obstacle_ahead\": {\r\n        \"prefix\": \"rocky.color_ir_sensor.is_obstacle_ahead\",\r\n        \"body\": \"rocky.color_ir_sensor.is_obstacle_ahead()\",\r\n        \"description\": \"is rocky obstacle ahead?\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"is_color\": {\r\n        \"prefix\": \"rocky.color_ir_sensor.is_color\",\r\n        \"body\": \"rocky.color_ir_sensor.is_color(${1|'red','green','blue','yellow','cyan','purple','white'|})\",\r\n        \"description\": \"is rocky detected color?\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"get_red\": {\r\n        \"prefix\": \"rocky.color_ir_sensor.get_red\",\r\n        \"body\": \"rocky.color_ir_sensor.get_red()\",\r\n        \"description\": \"rocky detected red color value\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"get_green\": {\r\n        \"prefix\": \"rocky.color_ir_sensor.get_green\",\r\n        \"body\": \"rocky.color_ir_sensor.get_green()\",\r\n        \"description\": \"rocky detected green color value\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"get_blue\": {\r\n        \"prefix\": \"rocky.color_ir_sensor.get_blue\",\r\n        \"body\": \"rocky.color_ir_sensor.get_blue()\",\r\n        \"description\": \"rocky detected blue color value\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"get_light_strength\": {\r\n        \"prefix\": \"rocky.color_ir_sensor.get_light_strength\",\r\n        \"body\": \"rocky.color_ir_sensor.get_light_strength()\",\r\n        \"description\": \"rocky color sensor ambient light intensity\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"get_reflected_light\": {\r\n        \"prefix\": \"rocky.color_ir_sensor.get_reflected_light\",\r\n        \"body\": \"rocky.color_ir_sensor.get_reflected_light()\",\r\n        \"description\": \"rocky color sensor reflected light intensity\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"get_reflected_infrared\": {\r\n        \"prefix\": \"rocky.color_ir_sensor.get_reflected_infrared\",\r\n        \"body\": \"rocky.color_ir_sensor.get_reflected_infrared()\",\r\n        \"description\": \"color sensor reflected infrared light intensity\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"get_greyness\": {\r\n        \"prefix\": \"rocky.color_ir_sensor.get_greyness\",\r\n        \"body\": \"rocky.color_ir_sensor.get_greyness()\",\r\n        \"description\": \"color sensor grey-scale value\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"ir\": {\r\n        \"prefix\": \"codey.ir\",\r\n        \"body\": \"codey.ir\",\r\n        \"description\": \"codey ir module\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"ir.send\": {\r\n        \"prefix\": \"codey.ir.send\",\r\n        \"body\": \"codey.ir.send(${msg:'A'})\",\r\n        \"description\": \"codey ir send message\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"ir.receive\": {\r\n        \"prefix\": \"codey.ir.receive\",\r\n        \"body\": \"codey.ir.receive()\",\r\n        \"description\": \"codey ir received message\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"ir.learn\": {\r\n        \"prefix\": \"codey.ir.learn\",\r\n        \"body\": \"codey.ir.learn(time_s = 3)\",\r\n        \"description\": \"codey ir record home appliances remote signal seconds\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"ir.send_learned_result\": {\r\n        \"prefix\": \"codey.ir.send_learned_result\",\r\n        \"body\": \"codey.ir.send_learned_result()\",\r\n        \"description\": \"codey ir send learned result message\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"event\": {\r\n        \"prefix\": \"@event\",\r\n        \"body\": \"@event\",\r\n        \"description\": \"codey event module\",\r\n        \"kind\": \"Module\"\r\n    },\r\n    \"start_event\": {\r\n        \"prefix\": \"@event.start\",\r\n        \"body\": [\r\n            \"@event.start\",\r\n            \"def on_start():\",\r\n            \"\\tpass\"\r\n        ],\r\n        \"description\": \"when codey start\",\r\n        \"kind\": \"Snippet\"\r\n    },\r\n    \"button_pressed_event\": {\r\n        \"prefix\": \"@event.button_pressed\",\r\n        \"body\": [\r\n            \"@event.button_${1|a,b,c|}_pressed\",\r\n            \"def on_button_${1|a,b,c|}_pressed():\",\r\n            \"\\tpass\"\r\n        ],\r\n        \"description\": \"when codey button pressed\",\r\n        \"kind\": \"Snippet\"\r\n    },\r\n    \"shaked_event\": {\r\n        \"prefix\": \"@event.shaked\",\r\n        \"body\": [\r\n            \"@event.shaked\",\r\n            \"def on_shaked():\",\r\n            \"\\tpass\"\r\n        ],\r\n        \"description\": \"when codey is shaked\",\r\n        \"kind\": \"Snippet\"\r\n    },\r\n    \"tilted_left_event\": {\r\n        \"prefix\": \"@event.tilted_left\",\r\n        \"body\": [\r\n            \"@event.tilted_left\",\r\n            \"def on_tilted_left():\",\r\n            \"\\tpass\"\r\n        ],\r\n        \"description\": \"when codey tilted left\",\r\n        \"kind\": \"Snippet\"\r\n    },\r\n    \"tilted_right_event\": {\r\n        \"prefix\": \"@event.tilted_right\",\r\n        \"body\": [\r\n            \"@event.tilted_right\",\r\n            \"def on_tilted_right():\",\r\n            \"\\tpass\"\r\n        ],\r\n        \"description\": \"when codey tilted right\",\r\n        \"kind\": \"Snippet\"\r\n    },\r\n    \"ears_up_event\": {\r\n        \"prefix\": \"@event.ears_up\",\r\n        \"body\": [\r\n            \"@event.ears_up\",\r\n            \"def on_ears_up():\",\r\n            \"\\tpass\"\r\n        ],\r\n        \"description\": \"when codey ears up\",\r\n        \"kind\": \"Snippet\"\r\n    },\r\n    \"ears_down_event\": {\r\n        \"prefix\": \"@event.ears_down\",\r\n        \"body\": [\r\n            \"@event.ears_down\",\r\n            \"def on_ears_down():\",\r\n            \"\\tpass\"\r\n        ],\r\n        \"description\": \"when codey ears down\",\r\n        \"kind\": \"Snippet\"\r\n    },\r\n    \"loudness_greater_than_event\": {\r\n        \"prefix\": \"@event.loudness_greater_than\",\r\n        \"body\": [\r\n            \"@event.greater_than(${value:10}, 'sound_sensor')\",\r\n            \"def on_greater_than():\",\r\n            \"\\tpass\"\r\n        ],\r\n        \"description\": \"when codey loudness greater than\",\r\n        \"kind\": \"Snippet\"\r\n    },\r\n    \"timer_greater_than_event\": {\r\n        \"prefix\": \"@event.timer_greater_than\",\r\n        \"body\": [\r\n            \"@event.greater_than(${value:10}, 'timer')\",\r\n            \"def on_greater_than():\",\r\n            \"\\tpass\"\r\n        ],\r\n        \"description\": \"when codey timer greater than\",\r\n        \"kind\": \"Snippet\"\r\n    },\r\n    \"lightness_less_than_event\": {\r\n        \"prefix\": \"@event.lightness_less_than\",\r\n        \"body\": [\r\n            \"@event.less_than(${value:5}, 'light_sensor')\",\r\n            \"def on_less_than():\",\r\n            \"\\tpass\"\r\n        ],\r\n        \"description\": \"when codey lightness less than\",\r\n        \"kind\": \"Snippet\"\r\n    },\r\n    \"received_event\": {\r\n        \"prefix\": \"@event.received\",\r\n        \"body\": [\r\n            \"@event.received(${msg:'message1'})\",\r\n            \"def on_received():\",\r\n            \"\\tpass\"\r\n        ],\r\n        \"description\": \"when codey received message\",\r\n        \"kind\": \"Snippet\"\r\n    },\r\n    \"broadcast\": {\r\n        \"prefix\": \"codey.broadcast\",\r\n        \"body\": \"codey.broadcast(${msg:'message1'})\",\r\n        \"description\": \"codey broadcast message\",\r\n        \"kind\": \"Function\"\r\n    },\r\n    \"stop_all_scripts\": {\r\n        \"prefix\": \"codey.stop_all_scripts\",\r\n        \"body\": \"codey.stop_all_scripts()\",\r\n        \"description\": \"codey stop all scripts\",\r\n        \"kind\": \"Function\"\r\n    }\r\n}"
];