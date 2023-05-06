export default [
    "python: {\n    \"import_neurons\": {\n        \"prefix\": \"import neurons\",\n        \"body\": \"import neurons\",\n        \"description\": \"import codey neurons\",\n        \"kind\": \"Snippet\"\n    },\n    \"neurons\": {\n        \"prefix\": \"neurons\",\n        \"body\": \"neurons\",\n        \"description\": \"codey neurons module\",\n        \"kind\": \"Module\"\n    },\n    \"led_panel\": {\n        \"prefix\": \"neurons.led_panel\",\n        \"body\": \"neurons.led_panel\",\n        \"description\": \"codey neurons led_panel module\",\n        \"kind\": \"Module\"\n    },\n    \"show_image\": {\n        \"prefix\": \"neurons.led_panel.show_image\",\n        \"body\": \"neurons.led_panel.show_image(${img:[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1]}, 0, ${num:1})\",\n        \"description\": \"codey neurons led panel display a image\",\n        \"kind\": \"Function\"\n    },\n    \"led_panel_clear\": {\n        \"prefix\": \"neurons.led_panel.clear\",\n        \"body\": \"neurons.led_panel.clear()\",\n        \"description\": \"codey neurons led panel clear\",\n        \"kind\": \"Function\"\n    },\n    \"show_string\": {\n        \"prefix\": \"neurons.led_panel.show_string\",\n        \"body\": \"neurons.led_panel.show_string(0, 255, 0, ${text:'hello'}, ${num:1})\",\n        \"description\": \"codey neurons led panel display a text\",\n        \"kind\": \"Function\"\n    },\n    \"show_image_secs\": {\n        \"prefix\": \"neurons.led_panel.show_image_secs\",\n        \"body\": [\n            \"neurons.led_panel.show_image(${img:[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1]}, 0, ${num:1})\",\n            \"time.sleep(${secs:1})\",\n            \"neurons.led_panel.clear()\"\n        ],\n        \"description\": \"codey neurons led panel display a image for seconds\",\n        \"kind\": \"Snippet\"\n    },\n    \"set_pixel\": {\n        \"prefix\": \"neurons.led_panel.set_pixel\",\n        \"body\": \"neurons.led_panel.set_pixel(${x:0}, ${y:0}, ${r:255}, ${g:0}, ${b:0}, ${num:1})\",\n        \"description\": \"codey neurons set the rgb color of a led light on the led panel\",\n        \"kind\": \"Function\"\n    },\n    \"led_strip\": {\n        \"prefix\": \"neurons.led_strip\",\n        \"body\": \"neurons.led_strip\",\n        \"description\": \"codey neurons led strip module\",\n        \"kind\": \"Module\"\n    },\n    \"led_strip_set_effect\": {\n        \"prefix\": \"neurons.led_strip.set_effect\",\n        \"body\": \"neurons.led_strip.set_effect(0, 1, ${colors:[1, 2, 3, 4, 5]}, ${num:1})\",\n        \"description\": \"codey neurons led strip colors\",\n        \"kind\": \"Function\"\n    },\n    \"led_strip_set_single\": {\n        \"prefix\": \"neurons.led_strip.set_single\",\n        \"body\": \"neurons.led_strip.set_single(${positon:1}, ${r:255}, ${g:0}, ${b:0}, ${num:1})\",\n        \"description\": \"codey neurons set the rgb color of a led light on the led strip\",\n        \"kind\": \"Function\"\n    },\n    \"buzzer\": {\n        \"prefix\": \"neurons.buzzer\",\n        \"body\": \"neurons.buzzer\",\n        \"description\": \"codey neurons buzzer module\",\n        \"kind\": \"Module\"\n    },\n    \"play_note\": {\n        \"prefix\": \"neurons.buzzer.play_note\",\n        \"body\": \"neurons.buzzer.play_note(${note:65}, ${beat:0.25}, ${num:1})\",\n        \"description\": \"codey neurons buzzer play note with beat\",\n        \"kind\": \"Function\"\n    },\n    \"play_tone\": {\n        \"prefix\": \"neurons.buzzer.play_tone\",\n        \"body\": \"neurons.buzzer.play_tone(${tone:700}, ${secs:1}, ${num:1})\",\n        \"description\": \"codey neurons buzzer play tone for seconds\",\n        \"kind\": \"Function\"\n    },\n    \"dc_motor_driver\": {\n        \"prefix\": \"neurons.dc_motor_driver\",\n        \"body\": \"neurons.dc_motor_driver\",\n        \"description\": \"codey neurons dc_motor_driver module\",\n        \"kind\": \"Module\"\n    },\n    \"set_power\": {\n        \"prefix\": \"neurons.dc_motor_driver.set_power\",\n        \"body\": \"neurons.dc_motor_driver.set_power(${power:50}, ${1|0,1,2|}, ${num:1})\",\n        \"description\": \"codey neurons set the power of dc motor driver\",\n        \"kind\": \"Function\"\n    },\n    \"set_power_secs\": {\n        \"prefix\": \"neurons.dc_motor_driver.set_power_secs\",\n        \"body\": [\n            \"neurons.dc_motor_driver.set_power(${power:50}, ${1|0,1,2|}, ${num:1})\",\n            \"time.sleep(${secs:1})\",\n            \"neurons.dc_motor_driver.set_power(0, 0, ${num:1})\"\n        ],\n        \"description\": \"codey neurons set the power of dc motor driver for seconds\",\n        \"kind\": \"Snippet\"\n    },\n    \"set_slots_power\": {\n        \"prefix\": \"neurons.dc_motor_driver.set_slots_power\",\n        \"body\": [\n            \"neurons.dc_motor_driver.set_power(${power:50}, 1, ${num:1})\",\n            \"neurons.dc_motor_driver.set_power(${power:50}, 2, ${num:1})\"\n        ],\n        \"description\": \"codey neurons set the slot1 and slot2 power of dc motor driver\",\n        \"kind\": \"Snippet\"\n    },\n    \"servo_driver\": {\n        \"prefix\": \"neurons.servo_driver\",\n        \"body\": \"neurons.servo_driver\",\n        \"description\": \"codey neurons servo driver module\",\n        \"kind\": \"Module\"\n    },\n    \"set_angle\": {\n        \"prefix\": \"neurons.servo_driver.set_angle\",\n        \"body\": \"neurons.servo_driver.set_angle(${degree:90}, ${1|0,1,2|}, ${num:1})\",\n        \"description\": \"codey neurons set the angle of servo driver\",\n        \"kind\": \"Function\"\n    },\n    \"funny_touch\": {\n        \"prefix\": \"neurons.funny_touch\",\n        \"body\": \"neurons.funny_touch\",\n        \"description\": \"codey neurons funny touch module\",\n        \"kind\": \"Module\"\n    },\n    \"is_blue_touched\": {\n        \"prefix\": \"neurons.servo_driver.is_blue_touched\",\n        \"body\": \"neurons.servo_driver.is_blue_touched(${num:1})\",\n        \"description\": \"is codey neurons funny touch touched blue color?\",\n        \"kind\": \"Function\"\n    },\n    \"is_yellow_touched\": {\n        \"prefix\": \"neurons.servo_driver.is_yellow_touched\",\n        \"body\": \"neurons.servo_driver.is_yellow_touched(${num:1})\",\n        \"description\": \"is codey neurons funny touch touched yellow color?\",\n        \"kind\": \"Function\"\n    },\n    \"is_red_touched\": {\n        \"prefix\": \"neurons.servo_driver.is_red_touched\",\n        \"body\": \"neurons.servo_driver.is_red_touched(${num:1})\",\n        \"description\": \"is codey neurons funny touch touched red color?\",\n        \"kind\": \"Function\"\n    },\n    \"is_green_touched\": {\n        \"prefix\": \"neurons.servo_driver.is_green_touched\",\n        \"body\": \"neurons.servo_driver.is_green_touched(${num:1})\",\n        \"description\": \"is codey neurons funny touch touched green color?\",\n        \"kind\": \"Function\"\n    },\n    \"ultrasonic_sensor\": {\n        \"prefix\": \"neurons.ultrasonic_sensor\",\n        \"body\": \"neurons.ultrasonic_sensor\",\n        \"description\": \"codey neurons ultrasonic sensor module\",\n        \"kind\": \"Module\"\n    },\n    \"get_distance\": {\n        \"prefix\": \"neurons.ultrasonic_sensor.get_distance\",\n        \"body\": \"neurons.ultrasonic_sensor.get_distance(${num:1})\",\n        \"description\": \"codey neurons ultrasonic sensor distance value\",\n        \"kind\": \"Function\"\n    },\n    \"gyro_sensor\": {\n        \"prefix\": \"neurons.gyro_sensor\",\n        \"body\": \"neurons.gyro_sensor\",\n        \"description\": \"codey neurons gyro sensor module\",\n        \"kind\": \"Module\"\n    },\n    \"get_roll\": {\n        \"prefix\": \"neurons.gyro_sensor.get_roll\",\n        \"body\": \"neurons.gyro_sensor.get_roll(${num:1})\",\n        \"description\": \"codey neurons gyro sensor roll value\",\n        \"kind\": \"Function\"\n    },\n    \"get_pitch\": {\n        \"prefix\": \"neurons.gyro_sensor.get_pitch\",\n        \"body\": \"neurons.gyro_sensor.get_pitch(${num:1})\",\n        \"description\": \"codey neurons gyro sensor pitch value\",\n        \"kind\": \"Function\"\n    },\n    \"is_tilted_forward\": {\n        \"prefix\": \"neurons.gyro_sensor.is_tilted_forward\",\n        \"body\": \"neurons.gyro_sensor.get_roll(${num:1}) < -10\",\n        \"description\": \"is codey neurons gyro sensor tilted forward\",\n        \"kind\": \"Snippet\"\n    },\n    \"is_tilted_backword\": {\n        \"prefix\": \"neurons.gyro_sensor.is_tilted_backword\",\n        \"body\": \"neurons.gyro_sensor.get_roll(${num:1}) > 10\",\n        \"description\": \"is codey neurons gyro sensor tilted backword\",\n        \"kind\": \"Snippet\"\n    },\n    \"is_tilted_left\": {\n        \"prefix\": \"neurons.gyro_sensor.is_tilted_left\",\n        \"body\": \"neurons.gyro_sensor.get_pitch(${num:1}) > 10\",\n        \"description\": \"is codey neurons gyro sensor tilted left\",\n        \"kind\": \"Snippet\"\n    },\n    \"is_tilted_right\": {\n        \"prefix\": \"neurons.gyro_sensor.is_tilted_right\",\n        \"body\": \"neurons.gyro_sensor.get_pitch(${num:1}) < -10\",\n        \"description\": \"is codey neurons gyro sensor tilted right\",\n        \"kind\": \"Snippet\"\n    },\n    \"is_shaked\": {\n        \"prefix\": \"neurons.gyro_sensor.is_shaked\",\n        \"body\": \"neurons.gyro_sensor.is_shaked(${num:1})\",\n        \"description\": \"is codey neurons gyro sensor shaked\",\n        \"kind\": \"Function\"\n    },\n    \"get_acceleration\": {\n        \"prefix\": \"neurons.gyro_sensor.get_acceleration\",\n        \"body\": \"neurons.gyro_sensor.get_acceleration(${1|'x','y','z'|}, ${num:1})\",\n        \"description\": \"codey neurons gyro sensor acceleration value\",\n        \"kind\": \"Function\"\n    },\n    \"pir_sensor\": {\n        \"prefix\": \"neurons.pir_sensor\",\n        \"body\": \"neurons.pir_sensor\",\n        \"description\": \"codey neurons pir sensor module\",\n        \"kind\": \"Module\"\n    },\n    \"is_activated\": {\n        \"prefix\": \"neurons.pir_sensor.is_activated\",\n        \"body\": \"neurons.pir_sensor.is_activated(${num:1})\",\n        \"description\": \"is codey neurons pir sensor activated\",\n        \"kind\": \"Function\"\n    },\n    \"soil_moisture\": {\n        \"prefix\": \"neurons.soil_moisture\",\n        \"body\": \"neurons.soil_moisture\",\n        \"description\": \"codey neurons soil moisture module\",\n        \"kind\": \"Module\"\n    },\n    \"soil_moisture_get_value\": {\n        \"prefix\": \"neurons.soil_moisture.get_value\",\n        \"body\": \"neurons.soil_moisture.get_value(${num:1})\",\n        \"description\": \"codey neurons soil moisture value\",\n        \"kind\": \"Function\"\n    },\n    \"button\": {\n        \"prefix\": \"neurons.button\",\n        \"body\": \"neurons.button\",\n        \"description\": \"codey neurons button module\",\n        \"kind\": \"Module\"\n    },\n    \"button_is_pressed\": {\n        \"prefix\": \"neurons.button.is_pressed\",\n        \"body\": \"neurons.button.is_pressed(${num:1})\",\n        \"description\": \"is codey neurons button pressed\",\n        \"kind\": \"Function\"\n    }\n}"
];