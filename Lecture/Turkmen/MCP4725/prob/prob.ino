/**************************************************************************/
/*!
    @file     trianglewave.pde
    @author   Adafruit Industries
    @license  BSD (see license.txt)

    This example will generate a triangle wave with the MCP4725 DAC.

    This is an example sketch for the Adafruit MCP4725 breakout board
    ----> http://www.adafruit.com/products/935

    Adafruit invests time and resources providing this open source code,
    please support Adafruit and open-source hardware by purchasing
    products from Adafruit!
*/
/**************************************************************************/
#include <Wire.h>
#include <Adafruit_MCP4725.h>

Adafruit_MCP4725 dac;
const int analogInPin = A1;
int sensorValue = 0;

void setup(void) {
  Serial.begin(9600);
  Serial.println("Hello!");

  // For Adafruit MCP4725A1 the address is 0x62 (default) or 0x63 (ADDR pin tied to VCC)
  // For MCP4725A0 the address is 0x60 or 0x61
  // For MCP4725A2 the address is 0x64 or 0x65
  dac.begin(0x61);

  Serial.println("Generating a triangle wave");
}

void loop(void) {
  //    uint32_t counter;

  delay(100);
  // Run through the full 12-bit scale for a triangle wave
  dac.setVoltage(2000, false);
  delay(50);
  sensorValue = analogRead(analogInPin);
  Serial.print("sensor = " );
  Serial.println(sensorValue);
  delay(2000);

  dac.setVoltage(4095, false);
  delay(50);
  sensorValue = analogRead(analogInPin);
  Serial.print("sensor = " );
  Serial.println(sensorValue);
  delay(1000);

  dac.setVoltage(0, false);
  delay(50);
  sensorValue = analogRead(analogInPin);
  Serial.print("sensor = " );
  Serial.println(sensorValue);
  delay(1000);

  //    for (counter = 0; counter < 4095; counter++)
  //    {
  //      dac.setVoltage(counter, false);
  //    }
  //    for (counter = 4095; counter > 0; counter--)
  //    {
  //      dac.setVoltage(counter, false);
  //    }
}
