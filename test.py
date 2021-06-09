r1 = 610
r2 = 615
r3 = 622

closing = 612

def max_profit():
    
    if closing>r1:
        midpoint_r1 = (r2-closing)/2
        limit = closing+midpoint_r1

        #allow bot to trade at the new limit set
    